<script setup lang="ts">
import { useAppRoutes } from "@/app/providers";
import { useAuthStore } from "@/entities/auth";
import { UserAvatar } from "@/features/user-profile";

const routes = useAppRoutes();
const authStore = useAuthStore();
</script>

<template>
  <RouterLink
    :to="routes.getProfile()"
    class="flex items-center gap-4 border-b p-4"
  >
    <UserAvatar size="lg" />
    <p class="text-sm font-semibold">{{ authStore.userInfo?.name }}</p>
  </RouterLink>
</template>

<style scoped></style>
