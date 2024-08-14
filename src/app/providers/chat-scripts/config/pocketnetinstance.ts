import { useDrawerStore } from "@/shared/ui/drawer";
import { DRAWER_CHAT_MENU_ID } from "@/widgets/chat-menu";

export const PocketnetInstance = {
  menuOpen: () => {
    useDrawerStore().setDrawerId(DRAWER_CHAT_MENU_ID);
  },
  mobile: {
    supportimagegallery: () => null
  },
  options: {
    address: "https://bastyon.com",
    backmap: undefined,
    device: "241dcb2c-6345-e8a8-8648-b12da53ba7cb",
    fingerPrint: "66616b6566696e6765727072696e74",
    firebase: "https://bastyon.com:8888",
    fullName: "bastyon",
    imageServer: "https://api.imgur.com/3/",
    imageServerup1: "https://pocketnet.app:8092/up",
    imageStorage: "https://api.imgur.com/3/images/",
    listofnodes: null,
    listofproxies: [
      {
        host: "1.pocketnet.app",
        port: 8899,
        wss: 8099
      },

      {
        host: "2.pocketnet.app",
        port: 8899,
        wss: 8099
      },

      {
        host: "3.pocketnet.app",
        port: 8899,
        wss: 8099
      },
      {
        host: "6.pocketnet.app",
        port: 8899,
        wss: 8099
      }
    ],
    localStoragePrefix: "bastyon",
    matrix: "matrix.pocketnet.app",

    name: "PCRB",
    nav: {
      navPrefix: "/"
    },
    rtc: "https://bastyon.com:9001/",
    rtchttp: "https://pocketnet.app:9091",
    rtcws: "wss://pocketnet.app:9090",
    server: "https://pocketnet.app/Shop/AJAXMain.aspx",
    url: "bastyon.com"
  },
  platform: {
    matrixchat: {
      link: () => null
    }
  }
};
