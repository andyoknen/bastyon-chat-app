import type { App } from "vue";

import { createPinia } from "pinia";

import { setupAssets } from "./assets";
import { setupChatScripts } from "./chat-scripts";
import { setupRouter } from "./router";

export const setupProviders = async (app: App) => {
  setupAssets();
  await setupChatScripts();
  app.use(createPinia());
  await setupRouter(app);
};

export * from "./app-routes";
export * from "./router";
export * from "./types";
