<script setup lang="ts">
import { useAuthStore } from "@/entities/auth";

const authStore = useAuthStore();
</script>

<template>
  <matrix-element
    :address.attr="authStore.address"
    :device.attr="''"
    :iscallsenabled.attr="true"
    :localization.attr="'en'"
    :mobile.attr="true"
    :pocketnet.attr="''"
    :privatekey.attr="authStore.privateKey"
    :recording.attr="true"
    :viewtype.attr="'split'"
  />
</template>
