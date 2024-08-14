<script setup lang="ts">
import { useThemeStore } from "@/entities/theme";

import ChatMenuButton from "./ChatMenuButton.vue";

const themeStore = useThemeStore();
</script>

<template>
  <ChatMenuButton @click="themeStore.toggleTheme">
    <IconMoon />
    <span> Ночной режим </span>
    <Toggle
      :value="themeStore.isDarkMode"
      @change="themeStore.toggleTheme"
      class="ml-auto"
    />
  </ChatMenuButton>
</template>

<style scoped></style>
