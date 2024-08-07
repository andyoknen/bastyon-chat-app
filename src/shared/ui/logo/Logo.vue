<script setup lang="ts">
import type { Component } from "vue";

import { IconLogo, IconLogoFull } from "@/shared/ui/icons";
import { HTMLAttributes } from "vue";

interface Props {
  class?: HTMLAttributes["class"];
  variant: "full" | "only-icon";
}

const props = withDefaults(defineProps<Props>(), {
  variant: "full"
});

const logoVariants: Record<Props["variant"], Component> = {
  full: IconLogoFull,
  "only-icon": IconLogo
};
</script>

<template>
  <component
    :class="props.class"
    :is="logoVariants?.[props.variant]"
    class="h-6"
  />
</template>
