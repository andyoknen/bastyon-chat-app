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
    class="flex h-10 w-full rounded-md border border-neutral-grad-2 bg-background px-2 py-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    v-model="modelValue"
  />
</template>
