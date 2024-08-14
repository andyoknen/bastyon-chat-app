<script setup lang="ts">
import { useAppRoutes } from "@/app/providers";
import { UserProfileInfo } from "@/features/user-profile";

const routes = useAppRoutes();
</script>

<template>
  <ProfileLayout title="Информация">
    <template #action>
      <RouterLink :to="routes.getProfileEdit()">Изм.</RouterLink>
    </template>
    <template #content>
      <Avatar size="xl" src="" username="D" />
      <UserProfileInfo />
    </template>
  </ProfileLayout>
</template>
