<script setup lang="ts">
const userProfileData = [
  { label: "Имя пользователя", value: "Серега" },
  { label: "О себе", value: "Привет, Я серега" }
];
</script>

<template>
  <div class="w-full rounded-md bg-background-secondary-theme px-2">
    <div
      :key="detail.label"
      class="border-b border-b-neutral-grad-0 py-1 text-sm last:border-none"
      v-for="detail of userProfileData"
    >
      <div class="text-color-txt-ac">
        {{ detail.label }}
      </div>
      <div>{{ detail.value }}</div>
    </div>
  </div>
</template>

<style scoped></style>
