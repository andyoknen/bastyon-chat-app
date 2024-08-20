<template>
  <div
    :class="$props.class"
    @click="$emit('close')"
    class="fixed inset-0 z-40 cursor-default bg-background-overlay"
    role="button"
  >
    <slot />
  </div>
</template>
