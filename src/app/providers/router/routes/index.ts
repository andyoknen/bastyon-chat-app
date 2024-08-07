import type { RouteRecordRaw } from "vue-router";

import { route as chatRoute } from "./chat";
import { route as loginRoute } from "./login";
import { route as welcomeRoute } from "./welcome";

export const routes: RouteRecordRaw[] = [
  loginRoute,
  chatRoute,
  welcomeRoute,
  {
    path: "/:pathMatch(.*)*",
    redirect: "/login"
  }
];
