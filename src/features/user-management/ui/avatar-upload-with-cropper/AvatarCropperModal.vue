<script setup lang="ts">
import { CropperResult } from "vue-advanced-cropper";

interface Props {
  avatarUrl: string;
  id: string;
}

const emit = defineEmits<{ (e: "crop", dataURL: string): void }>();
defineProps<Props>();

const cropperResult = ref<CropperResult>();

const onCrop = () => {
  const canvas = cropperResult.value.canvas;
  const dataURL = canvas.toDataURL();
  emit("crop", dataURL);
};
</script>

<template>
  <Modal :id="id" title="Перетащите для изменения положения">
    <template #content>
      <Cropper
        :imageUrl="$props.avatarUrl"
        class="h-[400px]"
        v-model:result="cropperResult"
      />
    </template>
    <template #footer>
      <div class="flex w-full justify-end">
        <Button @click="onCrop">Готово</Button>
      </div>
    </template>
  </Modal>
</template>
