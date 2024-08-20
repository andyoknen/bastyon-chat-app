<script lang="ts" setup>
import { LogoutButton } from "@/features/auth";
import { UserEditForm } from "@/features/user-management";
</script>

<template>
  <ProfileLayout title="Изменить профиль">
    <template #action>
      <button form="ddd">Готово</button>
    </template>
    <template #content>
      <UserEditForm form-id="ddd" />
      <div class="w-full border-t border-t-neutral-grad-0 pt-4">
        <LogoutButton class="w-full" />
      </div>
    </template>
  </ProfileLayout>
</template>
