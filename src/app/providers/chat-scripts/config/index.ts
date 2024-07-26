import { PocketnetInstance } from "./pocketnetinstance";

export const initializeChatConfig = () => {
  //@ts-ignore
  window.POCKETNETINSTANCE = PocketnetInstance;
};
