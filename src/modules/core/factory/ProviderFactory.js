// Import the crypto getRandomValues shim (**BEFORE** the shims)
import 'react-native-get-random-values';
// Import the the ethers shims (**BEFORE** ethers)
import '@ethersproject/shims';
import {Logs} from '@modules/log/logs';
import {EthProvider} from '@modules/core/provider/eth/EthProvider';
import {NexisProvider} from '@modules/core/provider/nexis/NexisProvider';

export class ProviderFactory {
  static providers = {};

  static init(configs) {
    try {
      for (let i = 0; i < configs.length; i++) {
        const config = configs[i];
        if (config.chain === 'ETHEREUM') {
          this.providers[config.name] = new EthProvider(config);
        } else if (config.chain === 'NEXIS') {
          this.providers[config.name] = new NexisProvider(config);
        }
      }
    } catch (e) {
      Logs.info('ProviderFactory: init', e);
    }
  }

  static getProvider(name) {
    return this.providers[name];
  }
}
