<script setup lang="ts">
import { LoginForm } from "@/features/auth";
</script>

<template>
  <div
    class="mx-auto flex w-full max-w-[350px] flex-col justify-center space-y-6"
  >
    <div class="flex flex-col space-y-2 text-center">
      <h1 class="text-2xl font-semibold tracking-tight">
        Войти в существующий аккаунт
      </h1>
      <p class="text-sm text-color-txt-gray">
        Если вы уже зарегистрированы в системе
      </p>
    </div>
    <LoginForm />
  </div>
</template>

<style scoped></style>
