<script setup lang="ts">
import { useAppInitializer } from "@/app/providers/app-initializer/use-app-initializer";
import { useAuthStore } from "@/entities/auth";

import { AppPages, AppRoutes, EAppProviders } from "./providers";

provide(EAppProviders.AppRoutes, AppRoutes);
provide(EAppProviders.AppPages, AppPages);

const authStore = useAuthStore();

onMounted(authStore.fetchUserInfo);
</script>

<template>
  <div class="relative min-h-screen bg-background-total-theme text-text-color">
    <transition mode="out-in" name="fade">
      <router-view />
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
