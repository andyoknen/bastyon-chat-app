import { setupProviders } from "@/app/providers";
import { AppLoading } from "@/app/ui";
import { createPinia } from "pinia";
import { createApp } from "vue";

import App from "./App.vue";

async function setupApp() {
  createApp(AppLoading).mount("#appLoading");
  const app = createApp(App);
  app.use(createPinia());
  await setupProviders(app);
  return app;
}

export const app = setupApp();
