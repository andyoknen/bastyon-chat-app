<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="mx-auto max-w-[656px] p-2">
    <header
      class="flex items-center justify-between border-b border-b-neutral-grad-0 py-4 text-sm font-medium"
    >
      <button
        @click="$router.back"
        class="flex w-[10%] items-center gap-1 text-color-txt-ac transition hover:text-neutral-grad-3"
      >
        <IconChevronLeft />
        Назад
      </button>
      <h1>{{ title }}</h1>
      <div
        class="w-[10%] text-right text-color-txt-ac transition hover:text-neutral-grad-3"
      >
        <slot name="action" />
      </div>
    </header>
    <div class="flex flex-col items-center space-y-4 py-4">
      <slot name="content" />
    </div>
  </div>
</template>
