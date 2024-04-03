import {configProperties} from '@modules/core/config/config.properties';
import axios from 'axios';
import {Logs} from '@modules/log/logs';

export class TokenFactory {
  static coinsList = [];

  static async getCoins() {
    try {
      let config = {
        method: 'get',
        timeout: 15000,
        url:
          configProperties.coinGecko.exclusiveApi +
          `coins/list?x_cg_pro_api_key=${configProperties.coinGecko.key}`,
      };
      let {data} = await axios(config);
      this.coinsList = [...data];
    } catch (e) {
      Logs.info('TokenFactory: getCoins', e);
    }
  }
}
