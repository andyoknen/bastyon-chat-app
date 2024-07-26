import { loadMatrixScripts } from "./loadMatrixScripts";
import { PocketnetInstance } from "./pocketnetinstance";

export const setupMatrixChat = async () => {
  //@ts-ignore
  window.POCKETNETINSTANCE = PocketnetInstance;
  await loadMatrixScripts();
};
