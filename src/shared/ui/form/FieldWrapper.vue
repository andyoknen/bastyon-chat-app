<script setup lang="ts">
interface Props {
  errorMessage: string;
  label: string;
}

withDefaults(defineProps<Props>(), {});
</script>

<template>
  <div class="space-y-2">
    <label
      :class="[errorMessage && 'text-color-bad']"
      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      v-if="label"
      >{{ label }}</label
    >
    <slot />
    <p class="text-sm font-medium text-color-bad" v-if="errorMessage">
      {{ errorMessage }}
    </p>
  </div>
</template>

<style scoped></style>
