<script setup lang="ts">
import { useAppRoutes } from "@/app/providers";
import { useAuthStore } from "@/entities/auth";
import { Form, SubmissionHandler } from "vee-validate";

import PrivateKeyInput from "./PrivateKeyInput.vue";

const authStore = useAuthStore();
const router = useRouter();
const appRoutes = useAppRoutes();

interface FormData {
  cryptoCredential: string;
}

const goToChat = () => router.push(appRoutes.getChat());

const onSubmit: SubmissionHandler<FormData> = async (
  { cryptoCredential },
  { setFieldError }
) => {
  const { error } = await authStore.login(cryptoCredential);
  if (error) {
    return setFieldError("cryptoCredential", error);
  }
  goToChat();
};
</script>

<template>
  <div class="grid gap-6">
    <Form @submit="onSubmit" class="grid gap-2" v-slot="{ values }">
      <PrivateKeyInput name="cryptoCredential" />
      <Button
        :disabled="!values.cryptoCredential"
        :loading="authStore.isLoggingIn"
        >Войти</Button
      >
    </Form>
  </div>
</template>

<style scoped></style>
