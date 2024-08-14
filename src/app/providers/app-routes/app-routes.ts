import { AppPages } from "../router";

interface Route<T extends object = {}> {
  name: string;
  params: T;
}

export class AppRoutes {
  private constructor() {}

  static getChat() {
    return getRoute(AppPages.chat, {});
  }

  static getLogin() {
    return getRoute(AppPages.login, {});
  }
}

function getRoute<T extends object = {}>(name: string, params?: T): Route<T> {
  return {
    name,
    params
  };
}
