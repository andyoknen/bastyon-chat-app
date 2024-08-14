<script setup lang="ts">
import { useAppRoutes } from "@/app/providers";
import { useAuthStore } from "@/entities/auth";
import { IconLogout } from "@/shared/ui/icons";
import { ChatMenuButton, DRAWER_CHAT_MENU_ID } from "@/widgets/chat-menu";

const authStore = useAuthStore();
const routes = useAppRoutes();
const router = useRouter();

const onLogout = async () => {
  authStore.logout();
  await router.push(routes.getWelcome());
};

const MENU_ITEMS = [
  {
    action: onLogout,
    icon: IconLogout,
    label: "Выйти"
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
        @click="menuItem.action"
        v-for="menuItem of MENU_ITEMS"
      />
    </template>
  </Drawer>
</template>

<style scoped></style>
