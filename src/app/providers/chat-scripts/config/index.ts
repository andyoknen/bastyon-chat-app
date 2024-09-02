import { PocketnetInstance } from "./pocketnetinstance";

export const initializeChatConfig = () => {
  //@ts-ignore
  window.testpocketnet = false;
  //@ts-ignore
  window.POCKETNETINSTANCE = PocketnetInstance;
};

export * from "./pocketnetinstance-configurator";
