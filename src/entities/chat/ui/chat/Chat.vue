<script setup lang="ts">
import { DEFAULT_ADDRESS, DEFAULT_PRIVATEKEY } from "@/shared/config";
</script>

<template>
  <matrix-element
    :address.attr="DEFAULT_ADDRESS"
    :device.attr="''"
    :iscallsenabled.attr="true"
    :localization.attr="'en'"
    :mobile.attr="true"
    :pocketnet.attr="''"
    :privatekey.attr="DEFAULT_PRIVATEKEY"
    :recording.attr="true"
    :viewtype.attr="'split'"
  />
</template>
