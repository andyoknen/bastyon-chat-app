<script setup lang="ts">
import { useAuthStore } from "@/entities/auth";

const authStore = useAuthStore();

defineProps<{
  size: "lg" | "xl";
}>();
</script>

<template>
  <Avatar
    :size="size"
    :src="authStore.userInfo?.image"
    :username="authStore.userInfo?.name"
  />
</template>

<style scoped></style>
