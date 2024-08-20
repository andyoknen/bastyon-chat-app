<script setup lang="ts">
import { useAppRoutes } from "@/app/providers";
import { useAuthStore } from "@/entities/auth";
import { useModalStore } from "@/shared/ui/modal";

const authStore = useAuthStore();
const routes = useAppRoutes();
const router = useRouter();
const modalStore = useModalStore();

const onLogout = async () => {
  await authStore.logout();
  router.push(routes.getWelcome());
};

const MODAL_LOGOUT_CONFIRM_ID = "MODAL_LOGOUT_CONFIRM_ID";
</script>

<template>
  <Button
    @click="modalStore.setCurrentModal(MODAL_LOGOUT_CONFIRM_ID)"
    variant="outline"
  >
    <IconLogout class="mr-2 h-5 w-5" />
    Выход</Button
  >
  <Modal :id="MODAL_LOGOUT_CONFIRM_ID" title="Bastyon">
    <template #content>
      <p>Вы уверены, что хотите выйти?</p>
    </template>
    <template #footer>
      <div class="flex justify-end gap-4">
        <Button @click="modalStore.setCurrentModal(null)">Отмена</Button>
        <Button @click="onLogout" variant="secondary">Выйти</Button>
      </div>
    </template>
  </Modal>
</template>
