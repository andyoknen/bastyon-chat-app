<script setup lang="ts">
import { HTMLAttributes } from "vue";

const emit = defineEmits(["close"]);
interface Props {
  class: HTMLAttributes["class"];
}

withDefaults(defineProps<Props>(), {});
</script>

<template>
  <button
    :class="$props.class"
    @click="$emit('close')"
    class="ml-auto text-color-txt-ac transition hover:text-neutral-grad-3"
  >
    <IconX />
  </button>
</template>
