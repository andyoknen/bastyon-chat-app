<script setup lang="ts">
import { HTMLAttributes } from "vue";

interface Props {
  class?: HTMLAttributes["class"];
  placeholder?: string;
}

const props = defineProps<Partial<Props>>();

const modelValue = defineModel("modelValue", { required: true });
</script>

<template>
  <input
    :class="props.class"
    :placeholder="placeholder"
    class="bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border border-neutral-grad-2 px-2 py-1 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    v-model="modelValue"
  />
</template>
