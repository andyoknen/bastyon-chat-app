import { PocketnetInstance } from "../chat-scripts/config/pocketnetinstance";

export class AppInitializer {
  private actions: Actions;
  private api: Api;
  private psdk: pSDK;

  constructor(PocketnetInstance) {
    this.api = new Api(PocketnetInstance);
    this.actions = new Actions(PocketnetInstance, this.api);
    this.psdk = new pSDK({
      actions: this.actions,
      api: this.api,
      app: PocketnetInstance
    });
  }

  initApi() {
    return this.api.initIf();
  }

  initializeAndFetchUserData(address, onLoad?) {
    return this.initApi().then(() => {
      return this.waitForApiReady().then(canUse => {
        if (canUse) {
          return this.loadUserData([address], onLoad);
        }
      });
    });
  }

  loadUserData(stateAddresses, onLoad?) {
    if (stateAddresses.length) {
      return this.psdk.userInfo.load(stateAddresses).then(() => {
        const userData = this.psdk.userInfo.get(stateAddresses[0]);
        if (onLoad) {
          onLoad(userData);
        }
        return userData;
      });
    }
    return null;
  }

  waitForApiReady() {
    return this.api.wait.ready("use", 1000).then(() => {
      return this.api.ready.use;
    });
  }
}

export const createAppInitializer = (): AppInitializer => {
  return new AppInitializer(PocketnetInstance);
};
