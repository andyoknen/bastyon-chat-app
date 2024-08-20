<script setup lang="ts">
import { Cropper, CropperResult } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";

interface Props {
  imageUrl: string;
}

withDefaults(defineProps<Props>(), {
  imageUrl: ""
});

const result = defineModel<CropperResult>("result", { required: true });

const cropper = ref(null);

const defaultSize = ({ imageSize }) => {
  const size = Math.min(imageSize.height, imageSize.width);
  return {
    height: size,
    width: size
  };
};

const stencilSize = ({ boundaries }) => {
  const _size = Math.min(boundaries.height, boundaries.width) - 48;
  return {
    height: _size,
    width: _size
  };
};

const onCropperChange = () => {
  result.value = cropper.value.getResult();
};
</script>

<template>
  <Cropper
    :debounce="false"
    :default-size="defaultSize"
    :min-height="150"
    :min-width="150"
    :src="imageUrl"
    :stencil-props="{
      lines: {},
      handlers: {},
      movable: false,
      scalable: false,
      aspectRatio: 1,
      previewClass: 'twitter-cropper__stencil'
    }"
    :stencil-size="stencilSize"
    :transitions="false"
    @change="onCropperChange"
    background-class="twitter-cropper__background"
    foreground-class="twitter-cropper__foreground"
    image-restriction="stencil"
    ref="cropper"
  />
</template>
<style></style>
