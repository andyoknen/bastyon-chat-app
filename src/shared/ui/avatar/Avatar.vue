<script lang="ts" setup>
import { cva } from "class-variance-authority";

const avatarVariants = cva("rounded-full  ", {
  variants: {
    size: {
      md: "max-h-12 max-w-12 min-w-12 min-h-12 text-2xl",
      xl: "max-h-32 max-w-32 min-w-32 min-h-32 text-7xl"
    },
    variant: {
      fallback:
        "bg-neutral-grad-0 flex justify-center items-center text-color-txt-gray-dark",
      image: "object-cover"
    }
  }
});

interface Props {
  size: NonNullable<Parameters<typeof avatarVariants>[0]>["size"];
  src: string;
  username: string;
}

withDefaults(defineProps<Props>(), {
  size: "md"
});
</script>

<template>
  <img
    :alt="username"
    :class="avatarVariants({ size, variant: 'image' })"
    :src="src"
    v-if="src"
  />
  <div :class="avatarVariants({ size, variant: 'fallback' })" v-else>
    <span v-if="username">
      {{ username?.[0] }}
    </span>
    <IconUser v-else />
  </div>
</template>
