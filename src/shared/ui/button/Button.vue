<script setup lang="ts">
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center relative justify-center rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    defaultVariants: {
      size: "default",
      variant: "default"
    },
    variants: {
      size: {
        default: "px-4 py-2 ",
        icon: "h-10 w-10",
        lg: "px-8",
        sm: "px-3"
      },
      variant: {
        default:
          "bg-color-bg-ac-bright hover:bg-opacity-90 text-text-on-bg-ac-color",
        link: "underline-offset-4 hover:underline",
        outline:
          "border border-input bg-transparent hover:bg-color-bg-ac-bright bg-opacity-25 hover:text-accent-foreground",
        secondary:
          "bg-color-bg-orange text-text-on-bg-ac-color hover:bg-opacity-90"
      }
    }
  }
);

interface Props {
  as?: string;
  disabled?: boolean;
  loading?: boolean;
  size?: NonNullable<Parameters<typeof buttonVariants>[0]>["size"];
  variant?: NonNullable<Parameters<typeof buttonVariants>[0]>["variant"];
}

withDefaults(defineProps<Props>(), {
  as: "button"
});
</script>

<template>
  <component
    :class="[
      buttonVariants({ variant, size }),
      loading && 'cursor-progress',
      $attrs.class ?? ''
    ]"
    :disabled="disabled || loading"
    :is="as"
  >
    <slot v-if="!loading" />
    <Spinner class="h-4 w-4" v-else />
  </component>
</template>

<style scoped></style>
