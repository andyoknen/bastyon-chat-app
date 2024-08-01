<script setup lang="ts">
import { AppPages, AppRoutes, EAppProviders } from "./providers";

provide(EAppProviders.AppRoutes, AppRoutes);
provide(EAppProviders.AppPages, AppPages);
</script>

<template>
  <router-view />
</template>

<style></style>
