<script setup lang="ts">
import { LoginWidget } from "@/widgets/login-widget";
</script>

<template>
  <div class="flex flex-col">
    <Logo class="absolute left-5 top-5 h-6" />
    <div class="flex h-screen items-center justify-center px-5">
      <LoginWidget />
    </div>
  </div>
</template>

<style scoped></style>
