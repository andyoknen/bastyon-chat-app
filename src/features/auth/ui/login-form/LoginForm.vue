<script setup lang="ts">
import { useAppRoutes } from "@/app/providers";
import { useAuthStore } from "@/entities/auth";

import { PrivateKeyInput } from "../private-key-input";

const authStore = useAuthStore();
const cryptoCredential = ref("");
const router = useRouter();
const appRoutes = useAppRoutes();

const goToChat = () => router.push(appRoutes.getChat());

const onSubmit = async () => {
  authStore.login(cryptoCredential.value);
  await goToChat();
};
</script>

<template>
  <div class="grid gap-6">
    <form>
      <div class="grid gap-2">
        <PrivateKeyInput v-model="cryptoCredential" />
        <Button @click.prevent="onSubmit">Войти</Button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
