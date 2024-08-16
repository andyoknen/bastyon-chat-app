<script setup lang="ts">
import { useAppRoutes } from "@/app/providers";
import { DRAWER_CHAT_MENU_ID } from "@/widgets/chat-menu";

import ProfileInfo from "./ProfileInfo.vue";
import ThemeSwitcher from "./ThemeSwitcher.vue";

const routes = useAppRoutes();
</script>

<template>
  <Drawer :id="DRAWER_CHAT_MENU_ID">
    <template #content>
      <ProfileInfo />
      <ThemeSwitcher />
    </template>
  </Drawer>
</template>

<style scoped></style>
