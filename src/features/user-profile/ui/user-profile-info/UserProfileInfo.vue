<script setup lang="ts">
import { useAuthStore } from "@/entities/auth";

const authStore = useAuthStore();

const userInfo = computed(() => authStore.userInfo);

const userProfileData = computed(() => [
  { label: "Имя пользователя", value: userInfo.value?.name },
  { label: "О себе", value: userInfo.value?.about },
  { label: "Язык", value: userInfo.value?.language },
  { label: "Веб-сайт", value: userInfo.value?.site }
]);
</script>

<template>
  <div class="w-full rounded-md bg-background-secondary-theme px-2">
    <template :key="detail.label" v-for="detail of userProfileData">
      <div
        class="border-b border-b-neutral-grad-0 py-1 text-sm last:border-none"
        v-if="detail.value"
      >
        <div class="text-color-txt-ac">
          {{ detail.label }}
        </div>
        <div>{{ detail.value }}</div>
      </div>
    </template>
  </div>
</template>

<style scoped></style>
