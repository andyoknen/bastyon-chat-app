<script setup lang="ts">
import { useModalStore } from "../model/store";

interface Props {
  id: string;
  title: string;
}

const props = withDefaults(defineProps<Props>(), {});

const modalStore = useModalStore();
</script>

<template>
  <DialogTeleport v-if="modalStore.currentModalId === props.id">
    <DialogOverlay
      @click="modalStore.setCurrentModal(null)"
      class="flex items-center justify-center"
      role="button"
    >
      <div
        @click.stop
        class="flex w-full max-w-lg flex-col gap-4 bg-background-total-theme p-6 shadow-lg sm:max-w-[500px] sm:rounded-lg"
        role="dialog"
        style="pointer-events: auto"
      >
        <div class="flex justify-between">
          <h2 class="text-lg font-semibold">{{ title }}</h2>
          <DialogClose
            @close="modalStore.setCurrentModal(null)"
            class="ml-auto"
          />
        </div>
        <slot name="content" />
        <slot name="footer" />
      </div>
    </DialogOverlay>
  </DialogTeleport>
</template>
