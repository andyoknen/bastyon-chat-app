import { defineStore } from "pinia";

const NAMESPACE = "drawer";

export const useDrawerStore = defineStore(NAMESPACE, () => {
  const currentDrawerId = ref<string>();

  const setDrawerId = (drawerId: string) => {
    currentDrawerId.value = drawerId;
  };

  return { currentDrawerId, setDrawerId };
});
