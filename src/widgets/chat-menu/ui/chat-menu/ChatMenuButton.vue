<script setup lang="ts">
import type { Component } from "vue";

import { RouteRecordRaw } from "vue-router";

const emit = defineEmits(["click"]);

defineProps<{
  to?: RouteRecordRaw;
}>();
</script>

<template>
  <component
    :is="to ? 'RouterLink' : 'button'"
    :to="to"
    @click="emit('click')"
    class="flex w-full items-center gap-3 bg-opacity-40 p-4 text-start hover:bg-color-bg-ac-bright"
  >
    <slot />
  </component>
</template>

<style scoped></style>
