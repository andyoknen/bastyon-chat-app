<script setup lang="ts">
import { useAppRoutes } from "@/app/providers";
import { UserAvatar, UserProfileInfo } from "@/features/user-profile";

const routes = useAppRoutes();
</script>

<template>
  <ProfileLayout title="Информация">
    <template #action>
      <RouterLink :to="routes.getProfileEdit()">Изм.</RouterLink>
    </template>
    <template #content>
      <UserAvatar size="xl" />
      <UserProfileInfo />
    </template>
  </ProfileLayout>
</template>
