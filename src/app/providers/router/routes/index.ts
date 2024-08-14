import type { RouteRecordRaw } from "vue-router";

import { route as chatRoute } from "./chat";
import { route as loginRoute } from "./login";

export const routes: RouteRecordRaw[] = [
  loginRoute,
  chatRoute,
  {
    path: "/:pathMatch(.*)*",
    redirect: "/login"
  }
];
