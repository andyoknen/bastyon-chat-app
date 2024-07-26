import { loadScript } from "@/shared/lib/loadScript";
const matrixScripts = [
  "js/lib/pocketnet/buffer.js",
  "js/lib/pocketnet/btc17.js",
  "js/media.js",
  "js/lib/client/api.js",
  "js/lib/client/system16.js",
  "js/functionsfirst.js",
  "js/vendor/unmute.js",
  "js/lib/bastyonCalls/bastyonCalls.min.js",
  "js/vendor/joypixels.js",
  "js/vendor/xss.min.js",
  "js/vendor/hammer.min.js",
  "https://pocketnet.app/js/widgets.js",
  "https://momentjs.com/downloads/moment.js",
  "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min.js",
  "https://cdn.jsdelivr.net/npm/linkifyjs@3.0.5/dist/linkify.min.js",
  "js/buildChat.js",
  "/chat/matrix-element.min.js"
];

export const loadMatrixScripts = async () => {
  try {
    for (let script of matrixScripts) {
      await loadScript(script);
    }
  } catch (error) {
    console.error("Failed to load matrix scripts", error);
  }
};
