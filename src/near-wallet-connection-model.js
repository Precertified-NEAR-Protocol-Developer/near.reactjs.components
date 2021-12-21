import { connect, Contract, keyStores, WalletConnection, Account } from 'near-api-js';

export function initConnection(config) {
    const near = connect(Object.assign({ deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() } }, config))
    return near;
}
/**
 * Class used to couple a `Near` object and `WalletConnection`
 */
export class NearWalletConnection {
  constructor(nearConfig) {
    this.account = null;
    this.walletConnection = null;
    this.nearConnection = null;
    this.nearConfig = nearConfig;
  }

   async getNearConnection() {
        if(this.nearConnection === null) {
            this.nearConnection = await initConnection(this.nearConfig);
        }
        return this.nearConnection;
    }
  

  async getWalletConnection() {
    if(this.walletConnection === null) {
        this.walletConnection = new WalletConnection(await this.getNearConnection());
    }
    return this.walletConnection;
  }

  async getAccount() {
    return (await this.getWalletConnection()).account();
  }

  async getAccountState() {
    return (await this.getAccount()).state();
  }

  async getAccountId() {
    return (await this.getWalletConnection()).getAccountId();
  }

  async getContract() {
    return await new Contract(await this.getAccount(), this.nearConfig.contractName, {
        viewMethods: [],
        changeMethods: [],
    });
  }
}

export default function getNearWalletConnection(nearConfig) {
    return new NearWalletConnection(nearConfig);
}
