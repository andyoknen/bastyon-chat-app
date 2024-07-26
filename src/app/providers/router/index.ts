import type { App } from "vue";

import { BASE_URL } from "@/shared/config";
import { createRouter, createWebHistory } from "vue-router";

import { routes } from "./routes";

const router = createRouter({
  history: createWebHistory(BASE_URL),
  routes
});

export async function setupRouter(app: App) {
  app.use(router);
  return router.isReady();
}
