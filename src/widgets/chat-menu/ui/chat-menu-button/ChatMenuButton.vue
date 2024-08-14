<script setup lang="ts">
import type { Component } from "vue";

import { RouteRecordRaw } from "vue-router";

const emit = defineEmits(["click"]);

defineProps<{
  icon: Component;
  label: string;
  to?: RouteRecordRaw;
}>();
</script>

<template>
  <component
    :is="to ? 'RouterLink' : 'button'"
    :to="to"
    @click="emit('click')"
    class="back flex w-full items-center gap-2 rounded-lg bg-opacity-40 px-2 py-1.5 text-start hover:bg-color-bg-ac-bright"
  >
    <component :is="icon" class="h-4 w-4" />
    <span class="text-sm"> {{ label }} </span>
  </component>
</template>

<style scoped></style>
