<script setup lang="ts">
import { AppPages, AppRoutes, EAppProviders } from "./providers";

provide(EAppProviders.AppRoutes, AppRoutes);
provide(EAppProviders.AppPages, AppPages);
</script>

<template>
  <div class="relative min-h-screen bg-background-total-theme">
    <router-view />
  </div>
</template>

<style></style>
