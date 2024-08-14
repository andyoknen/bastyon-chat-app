import { useLocalStorage } from "@/shared/lib/browser";
import { convertToHexString } from "@/shared/lib/convert-to-hex-string";
import { defineStore } from "pinia";

import type { AuthData } from "./types";

import { getAddressFromPubKey } from "../lib";
import { createKeyPair } from "./key-pair";

const NAMESPACE = "auth";

export const useAuthStore = defineStore(NAMESPACE, () => {
  const { setLSValue: setLSAuthData, value: LSAuthData } =
    useLocalStorage<AuthData>(NAMESPACE, { address: null, privateKey: null });

  const address = ref(LSAuthData.address);
  const privateKey = ref(LSAuthData.privateKey);

  const isAuthenticated = computed(() => address.value && privateKey.value);

  const setAuthData = (authData: AuthData) => {
    address.value = authData.address;
    privateKey.value = authData.privateKey;
    setLSAuthData(authData);
  };

  const login = (cryptoCredential: string) => {
    const keyPair = createKeyPair(cryptoCredential);
    const address = getAddressFromPubKey(keyPair.publicKey);
    const authData: AuthData = {
      address,
      privateKey: convertToHexString(keyPair.privateKey)
    };
    setAuthData(authData);
    return authData;
  };

  const logout = () => {
    setAuthData({ address: null, privateKey: null });
  };

  return { address, isAuthenticated, login, logout, privateKey };
});
