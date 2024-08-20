<script setup lang="ts">
defineEmits(["change"]);

defineProps<{
  value?: boolean;
}>();
</script>

<template>
  <label class="cursor-pointer">
    <input
      :checked="value"
      @change="$emit('change')"
      class="peer sr-only"
      type="checkbox"
    />
    <div
      class="peer relative h-6 w-11 rounded-full bg-neutral-grad-0 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-neutral-grad-0 after:bg-white after:transition-all after:content-[''] peer-checked:bg-color-txt-ac peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none rtl:peer-checked:after:-translate-x-full"
    />
  </label>
</template>
