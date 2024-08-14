<script setup lang="ts">
import { AppPages, AppRoutes, EAppProviders } from "./providers";

provide(EAppProviders.AppRoutes, AppRoutes);
provide(EAppProviders.AppPages, AppPages);
</script>

<template>
  <div class="relative min-h-screen bg-background-total-theme">
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
