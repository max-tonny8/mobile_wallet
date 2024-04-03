import {StorageUtil} from '@modules/core/util/StorageUtil';
import {WALLET_LIST, WALLET_LIST_KEY} from '@persistence/wallet/WalletConstant';
import {ASSET_TYPE_TOKEN} from '../constant/constant';
import _ from 'lodash';
import {configProperties} from '@modules/core/config/config.properties';
import axios from 'axios';
import {TokenFactory} from './TokenFactroy';
import {Logs} from '@modules/log/logs';

export class PricesFactory {
  static items = [];

  static async init() {
    try {
      let assets = WALLET_LIST['coins'];
      await this.fetchTokens(assets);
    } catch (e) {
      Logs.info('PricesFactory: init', e);
    }
  }

  static async load() {
    try {
      const {wallets} = await StorageUtil.getItem(WALLET_LIST_KEY);
      let assets = [];
      _.forEach(wallets, wallet => {
        _.forEach([...wallet.coins, ...wallet.tokens], function (coin) {
          assets.push(coin);
        });
      });
      await this.fetchTokens(assets);
    } catch (e) {
      Logs.info('PricesFactory: load', e);
    }
  }

  static async add(asset) {
    const coins = TokenFactory.coinsList;
    const coin = _.find(coins, ['name', asset.name]);
  }

  static async fetchTokens(assets) {
    let endpoints = [];
    const chunks = _.chunk(assets, 5);
    for (let i = 0; i < chunks.length; i++) {
      const chunk = chunks[i];
      let ids = '';
      for (let j = 0; j < chunk.length; j++) {
        ids = ids + chunk[j].cid + ', ';
      }
      let config = {
        method: 'get',
        timeout: 15000,
        url:
          configProperties.coinGecko.exclusiveApi +
          `coins/markets?vs_currency=usd&ids=${ids}&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d&locale=en&precision=5&x_cg_pro_api_key=${configProperties.coinGecko.key}`,
      };
      endpoints.push(axios(config));
    }
    let results = await Promise.all(endpoints);

    for (let i = 0; i < chunks.length; i++) {
      this.items = [...this.items, ...results[i].data];
    }
    this.items.push({
      id: 'nexis',
      name: 'Nexis',
      current_price: 0.05,
      image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/22072.png',
    });
  }
}
