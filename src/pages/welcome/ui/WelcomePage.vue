<script setup lang="ts">
import { useAppRoutes } from "@/app/providers";

const infoLinks = [
  { href: "https://bastyon.com/about", label: "О нас" },
  { href: "https://bastyon.com/about", label: "Обозреватель блокчейна" },
  { href: "https://bastyon.com/help?page=faq", label: "F.A.Q" }
];

const appRoutes = useAppRoutes();
</script>

<template>
  <div class="h-screen md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
    <div class="relative hidden lg:flex">
      <img alt="welcome" class="w-full object-cover" src="/image/welcome.jpg" />
    </div>
    <div class="p-4 lg:p-8">
      <div
        class="flex h-full w-full flex-col items-start space-y-4 pt-[30%] lg:space-y-6"
      >
        <Logo class="h-8" variant="only-icon" />
        <h1 class="text-4xl sm:text-6xl">Bastyon свободы слова</h1>
        <p class="text-color-txt-gray sm:text-lg">
          Децентрализованная социальная сеть на блокчейне. Общайтесь с друзьями
          в зашифрованном чате без привязки к телефону
        </p>
        <Button variant="secondary">Создать новый аккаунт</Button>
        <Button :to="appRoutes.getLogin()" as="RouterLink" variant="outline">
          Войти в существующий аккаунт</Button
        >
      </div>
    </div>
  </div>
  <footer
    class="absolute bottom-0 left-0 flex w-full justify-between space-x-1 bg-color-shadow-var px-4 text-sm text-text-on-bg-ac-color"
  >
    <nav>
      <a
        :href="infoLink.href"
        :key="infoLink.href"
        class="underline-offset-4 after:px-1 after:content-['·'] last:after:content-none hover:underline"
        rel="noopener noreferrer nofollow"
        role="link"
        target="_blank"
        v-for="infoLink of infoLinks"
        >{{ infoLink.label }}</a
      >
    </nav>
    <span class="text-right"> Bastyon, 2019—2024 </span>
  </footer>
</template>

<style scoped></style>
