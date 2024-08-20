<script setup lang="ts">
import { useModalStore } from "@/shared/ui/modal";
import { useField } from "vee-validate";

import { MODAL_AVATAR_CROPPER_ID } from "../../config";
import AvatarCropperModal from "./AvatarCropperModal.vue";
import AvatarInput from "./AvatarInput.vue";

interface Props {
  name: string;
}

const props = defineProps<Props>();

const modalStore = useModalStore();
const { setValue: setAvatarUrl } = useField(() => props.name);

const croppedAvatarUrl = ref("");
const avatarUrl = ref("");

const onAvatarUrlGenerated = (_avatarUrl: string) => {
  avatarUrl.value = _avatarUrl;
  modalStore.setCurrentModal(MODAL_AVATAR_CROPPER_ID);
};

const onAvatarCrop = (_croppedAvatarUrl: string) => {
  croppedAvatarUrl.value = _croppedAvatarUrl;
  setAvatarUrl(croppedAvatarUrl.value);
  modalStore.setCurrentModal(null);
};
</script>

<template>
  <div class="w-fit">
    <AvatarInput
      :avatar-url="croppedAvatarUrl"
      @select="onAvatarUrlGenerated"
    />
    <AvatarCropperModal
      :avatar-url="avatarUrl"
      :id="MODAL_AVATAR_CROPPER_ID"
      @crop="onAvatarCrop"
    />
  </div>
</template>
