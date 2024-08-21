import { createAppInitializer } from "@/app/providers";
import { useLocalStorage } from "@/shared/lib/browser";
import { convertToHexString } from "@/shared/lib/convert-to-hex-string";
import { useAsyncOperation } from "@/shared/use";
import { defineStore } from "pinia";

import type { AuthData, UserInfo } from "./types";

import { getAddressFromPubKey } from "../lib";
import { createKeyPair } from "./key-pair";

const NAMESPACE = "auth";

export const useAuthStore = defineStore(NAMESPACE, () => {
  const { setLSValue: setLSAuthData, value: LSAuthData } =
    useLocalStorage<AuthData>(NAMESPACE, { address: null, privateKey: null });

  const appInitializer = createAppInitializer();

  const address = ref(LSAuthData.address);
  const privateKey = ref(LSAuthData.privateKey);
  const userInfo = ref<UserInfo>();

  const isAuthenticated = computed(() => address.value && privateKey.value);

  const setAuthData = (authData: AuthData) => {
    address.value = authData.address;
    privateKey.value = authData.privateKey;
    setLSAuthData(authData);
  };

  const setUserInfo = (info: UserInfo) => {
    userInfo.value = info;
  };

  const fetchUserInfo = async () => {
    await appInitializer.initializeAndFetchUserData(address.value, setUserInfo);
  };

  const { execute: login, isLoading: isLoggingIn } = useAsyncOperation(
    async (cryptoCredential: string) => {
      try {
        const keyPair = createKeyPair(cryptoCredential);
        const address = getAddressFromPubKey(keyPair.publicKey);
        const authData: AuthData = {
          address,
          privateKey: convertToHexString(keyPair.privateKey)
        };
        setAuthData(authData);
        await fetchUserInfo();
        return { data: authData, error: null };
      } catch (e) {
        return { data: null, error: "Вы ввели неверный приватный ключ" };
      }
    }
  );

  const logout = () => {
    setAuthData({ address: null, privateKey: null });
    setUserInfo(null);
  };

  return {
    address,
    fetchUserInfo,
    isAuthenticated,
    isLoggingIn,
    login,
    logout,
    privateKey,
    userInfo
  };
});

//
