<script setup lang="ts">
import { useDrawerStore } from "../model";

interface Props {
  id: string;
}

const props = defineProps<Props>();

const drawerStore = useDrawerStore();

const isDisplayCurrentDrawer = computed(
  () => props.id === drawerStore.currentDrawerId
);
const canShowOverlay = ref(false);

watch(isDisplayCurrentDrawer, isDisplayCurrentMenu => {
  if (isDisplayCurrentMenu) {
    canShowOverlay.value = true;
  }
});

const closeDrawer = () => {
  drawerStore.setDrawerId(null);
};

const onAfterLeaveTransition = () => {
  canShowOverlay.value = false;
};

onUnmounted(closeDrawer);
</script>

<template>
  <DialogTeleport>
    <transition @after-leave="onAfterLeaveTransition" name="fade">
      <DialogOverlay @click="closeDrawer" v-show="canShowOverlay">
        <transition @after-leave="onAfterLeaveTransition" name="slide-in">
          <div
            @click.stop
            class="h-screen w-[320px] bg-background-total-theme p-2"
            v-show="isDisplayCurrentDrawer"
          >
            <div class="flex gap-3 p-2">
              <Logo variant="only-icon" />
              <DialogClose @close="closeDrawer" class="ml-auto" />
            </div>
            <div class="p-2">
              <slot name="content" />
            </div>
          </div>
        </transition>
      </DialogOverlay>
    </transition>
  </DialogTeleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-in-enter-active,
.slide-in-leave-active {
  transition: transform 0.15s ease-in;
}

.slide-in-enter-from,
.slide-in-leave-to {
  transform: translateX(-100%);
}
.slide-in-enter-to,
.slide-in-leave-from {
  transform: translateX(0);
}
</style>
