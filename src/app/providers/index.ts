import type { App } from "vue";

import { setupAssets } from "./assets";
import { setupMatrixChat } from "./matrix-chat";
import { setupRouter } from "./router";

export const setupProviders = async (app: App) => {
  setupAssets();
  await setupMatrixChat();
  await setupRouter(app);
};
