import type { App } from "vue";

import { setupAssets } from "./assets";
import { setupChatScripts } from "./chat-scripts";
import { setupRouter } from "./router";

export const setupProviders = async (app: App) => {
  setupAssets();
  await setupChatScripts();
  await setupRouter(app);
};
