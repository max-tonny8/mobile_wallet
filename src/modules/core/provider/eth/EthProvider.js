import {Provider} from '@modules/core/provider/base/Provider';
import axios, {AxiosInstance} from 'axios';
import {ethers, utils} from 'ethers';
import moment from 'moment';
import convert from 'ether-converter';
import {parseEther, parseUnits} from 'ethers/lib/utils';
import {ASSET_TYPE_COIN} from '@modules/core/constant/constant';
import {configProperties} from '@modules/core/config/config.properties';
import {Logs} from '@modules/log/logs';

const abi = [
  // Read-Only Functions
  'function balanceOf(address owner) view returns (uint256)',
  'function decimals() view returns (uint8)',
  'function symbol() view returns (string)',

  // Authenticated Functions
  'function transfer(address to, uint amount) returns (bool)',

  // Events
  'event Transfer(address indexed from, address indexed to, uint amount)',
];

export class EthProvider implements Provider {
  apiInstance: AxiosInstance;
  testnet: boolean;
  provider: ethers.providers.JsonRpcProvider;

  constructor({rpcUrl, chainId, apiEndpoint, apiKey, testnet}) {
    this.apiInstance = axios.create({
      baseURL:
        `${apiEndpoint}?apiKey=${apiKey}` ||
        `https://api.etherscan.com/api?apiKey=${apiKey}`,
    });
    this.testnet = testnet || false;
    this.provider = new ethers.providers.JsonRpcProvider(
      rpcUrl || 'https://eth.llamarpc.com	',
    );
  }

  async getNetwork(): Promise<Object> {
    return await this.provider.getNetwork();
  }

  /*
   * Returns a best guess of the Gas Price to use in a transaction.
   */
  async getGasPrice() {
    return await this.provider.getGasPrice();
  }

  /*
   *
   * Returns the current recommended FeeData to use in a transaction.
   * For an EIP-1559 transaction, the maxFeePerGas and maxPriorityFeePerGas should be used.
   * For legacy transactions and networks which do not support EIP-1559, the gasPrice should be used.
   */
  async getFeeData() {
    return await this.provider.getFeeData();
  }

  /*
   *
   * Returns an estimate of the amount of gas that would be required to submit transaction to the network.
   * An estimate may not be accurate since there could be another transaction on the network that was not accounted for, but after being mined affected relevant state.
   */
  async estimateGas(transaction) {
    const {to, value, decimals} = transaction;
    return await this.provider.estimateGas({
      to,
      value: parseEther(value.toString(), decimals || 18),
    });
  }

  /*
   * Get the estimate fee for token transferring
   */
  async getEstimateTokenGas({
    signer,
    to,
    value,
    tokenContractAddress,
    decimals,
  }) {
    const token_rw = new ethers.Contract(tokenContractAddress, abi, signer);
    const feeData = await this.getFeeData();
    const gasLimit = await token_rw.estimateGas.transfer(
      to.toLowerCase(),
      parseUnits(value.toString(), decimals),
    );
    const fee = gasLimit.mul(feeData.gasPrice);
    return {
      estimateGas: {
        wei: fee,
        ether: utils.formatEther(fee),
      },
      gas: {
        gasLimit,
        gasPrice: feeData.gasPrice,
      },
    };
  }

  /*
   * Transfers amount tokens to target from the current signer. The return value (a boolean) is inaccessible during a write operation using a transaction.
   * Other techniques (such as events) are required if this value is required. On-chain contracts calling the transfer function have access to this result, which is why it is possible.
   */
  async transferToken({signer, tokenContractAddress, to, value}) {
    // Read-Write; By connecting to a Signer, allows:
    // - Everything from Read-Only (except as Signer, not anonymous)
    // - Sending transactions for non-constant functions
    const token_rw = new ethers.Contract(tokenContractAddress, abi, signer);
    return await token_rw.populateTransaction.transfer(to, value);
    // {
    //   accessList: [],
    //   chainId: 1337,
    //   confirmations: 0,
    //   data: '0xa9059cbb0000000000000000000000005555763613a12d8f3e73be831dff8598089d3dca0000000000000000000000000000000000000000000000001111d67bb1bb0000',
    //   from: '0x4342bf02BDe4A21Da695E8e82D3d79E85F3dFAD1',
    //   gasLimit: { BigNumber: "51558" },
    //   gasPrice: null,
    //   hash: '0xa2f3801c0d10f1c21a3d858814023702d9532ea1ae000342cb025a1c1747cec4',
    //   maxFeePerGas: { BigNumber: "1598390034" },
    //   maxPriorityFeePerGas: { BigNumber: "1500000000" },
    //   nonce: 2,
    //   r: '0xcbf78dfbcd816b0979f75850a24882cb74c4981f2d8a4f8bab2f5b2eef36c8bc',
    //   s: '0x1434a139510210aa4b97c99143d78e8fc2becce14ee44b92c6e18416773beee4',
    //   to: '0xff04b6fBd9FEcbcac666cc0FFfEed58488c73c7B',
    //   type: 2,
    //   v: 1,
    //   value: { BigNumber: "0" },
    //   wait: [Function (anonymous)]
    // }
  }

  async getTransactions(wallet): Promise<Object> {
    let url = '';
    let transactions = [];
    if (wallet.type === ASSET_TYPE_COIN) {
      url += `&module=account&action=txlist&address=${wallet.walletAddress}&startblock=0&endblock=99999999&page=1&offset=10&sort=desc`;
    } else {
      url += `&module=account&action=tokentx&contractaddress=${wallet.contract}&address=${wallet.walletAddress}&page=1&offset=30&startblock=0&endblock=27025780&sort=desc`;
    }
    const {data, status} = await this.apiInstance.get(url, {
      timeout: 5000,
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
      },
    });
    if (status === 200) {
      const {status, result} = data;
      if (status === '1') {
        for (let i = 0; i < result.length; i++) {
          const item = {...result[i]};
          item.isSender =
            item.from.toUpperCase() === wallet.walletAddress.toUpperCase();
          item.status =
            item.isError === '1'
              ? '-1'
              : item.txreceipt_status === '0'
              ? '0'
              : '1';
          item.createdAt = moment(item.timeStamp, 'X').fromNow();
          item.value = convert(item.value, 'wei').ether;
          item.gasFee = convert(item.gasPrice * item.gas, 'wei').ether;
          let explore = configProperties.eth.explore + `tx/${item.hash}`;
          switch (wallet.chain) {
            case 'POLYGON':
              explore = configProperties.polygon.explore + `tx/${item.hash}`;
              break;
            case 'BSC':
              explore = configProperties.bsc.explore + `tx/${item.hash}`;
              break;
            default:
              break;
          }
          item.explore = explore;
          transactions.push(item);
        }
      }
    }
    return transactions;
  }

  async getBalance(address) {
    try {
      const result = await this.provider.getBalance(address);
      return utils.formatEther(result);
    } catch (e) {
      Logs.info('EthProvider: getBalance', e);
    }
  }

  async getTokenBalance({tokenContractAddress, signer, wallet}) {
    const token_rw = new ethers.Contract(tokenContractAddress, abi, signer);
    return await token_rw.balanceOf(wallet.address);
  }
}
