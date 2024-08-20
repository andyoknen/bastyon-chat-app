import { defineStore } from "pinia";

const NAMESPACE = "modal";

export const useModalStore = defineStore(NAMESPACE, () => {
  const currentModalId = ref<string>();

  const setCurrentModal = (modalId: string) => {
    currentModalId.value = modalId;
  };

  const closeModal = () => setCurrentModal(null);

  return { closeModal, currentModalId, setCurrentModal };
});
