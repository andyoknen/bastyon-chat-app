<script setup lang="ts">
import { LoginWidget } from "@/widgets/login-widget";
</script>

<template>
  <div class="relative flex min-h-screen flex-col bg-background">
    <Logo class="absolute left-5 top-5 h-6" />
    <div class="h-screen flex justify-center items-center">
      <LoginWidget />
    </div>
  </div>
</template>

<style scoped></style>
