<script setup lang="ts">
import { useAppRoutes } from "@/app/providers";
import { IconEdit, IconUser } from "@/shared/ui/icons";
import { ChatMenuButton, DRAWER_CHAT_MENU_ID } from "@/widgets/chat-menu";

const routes = useAppRoutes();

const MENU_ITEMS = [
  {
    icon: IconUser,
    label: "Мой профиль",
    to: routes.getProfile()
  },
  {
    icon: IconEdit,
    label: "Изменить профиль",
    to: routes.getProfileEdit()
  }
];
</script>

<template>
  <Drawer :id="DRAWER_CHAT_MENU_ID">
    <template #content>
      <ChatMenuButton
        :icon="menuItem.icon"
        :key="menuItem.label"
        :label="menuItem.label"
        :to="menuItem.to"
        v-for="menuItem of MENU_ITEMS"
      />
    </template>
  </Drawer>
</template>

<style scoped></style>
