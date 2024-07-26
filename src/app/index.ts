import { setupProviders } from "@/app/providers";
import { createApp } from "vue";

import App from "./App.vue";

async function setupApp() {
  const app = createApp(App);
  await setupProviders(app);
  return app;
}

export const app = await setupApp();
