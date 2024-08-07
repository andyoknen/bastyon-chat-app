<script setup lang="ts">
import type { Component } from "vue";

const emit = defineEmits(["click"]);

defineProps<{
  icon: Component;
  label: string;
}>();
</script>

<template>
  <button
    @click="emit('click')"
    class="back flex w-full items-center gap-2 rounded-lg bg-opacity-40 px-2 py-1.5 text-start hover:bg-color-bg-ac-bright"
  >
    <component :is="icon" class="h-4 w-4" />
    <span class="text-sm"> {{ label }} </span>
  </button>
</template>

<style scoped></style>
