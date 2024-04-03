import {
  bsc,
  eth,
  nexis,
  polygon,
  ripple,
  solana,
  tron,
  avalanche,
  fantom,
  celo,
  arbitrum,
  optimism,
} from '@modules/core/constant/constant';
import {applicationProperties} from '@src/application.properties';

export const WALLET_LIST_KEY = '@WALLET_LIST_KEY';

export const NOTIFICATION_KEY = '@NOTIFICATION_KEY';

export const WALLET_LIST = {
  chain: 'ALL',
  name: 'Multi-Coin Wallet',
  coins: [eth, bsc, polygon, avalanche, fantom, celo, arbitrum, optimism],
};
