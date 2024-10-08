import type { App } from "vue";

import { BASE_URL } from "@/shared/config";
import { createRouter, createWebHistory } from "vue-router";

import { createRouterHandlers } from "./handlers";
import { routes } from "./routes";
export { pages as AppPages } from "./pages";

const router = createRouter({
  history: createWebHistory(BASE_URL),
  routes
});

export async function setupRouter(app: App) {
  app.use(router);
  createRouterHandlers(router);
  return router.isReady();
}
