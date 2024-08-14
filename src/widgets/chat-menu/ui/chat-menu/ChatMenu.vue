<script setup lang="ts">
import { useAppRoutes } from "@/app/providers";
import { DRAWER_CHAT_MENU_ID } from "@/widgets/chat-menu";

import ThemeSwitcher from "./ThemeSwitcher.vue";

const routes = useAppRoutes();
</script>

<template>
  <Drawer :id="DRAWER_CHAT_MENU_ID">
    <template #content>
      <RouterLink
        :to="routes.getProfile()"
        class="flex items-center gap-4 border-b p-4"
      >
        <Avatar size="lg" src="" username="s" />
        <p class="text-sm font-semibold">SSSS</p>
      </RouterLink>
      <ThemeSwitcher />
    </template>
  </Drawer>
</template>

<style scoped></style>
