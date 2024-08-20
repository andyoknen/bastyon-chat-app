<script setup lang="ts">
defineProps<{
  avatarUrl: string;
}>();

const emit = defineEmits<{ (e: "select", baseUrl: string): void }>();

const onFileChange = event => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = e => {
      const baseUrl = e.target.result;
      emit("select", baseUrl.toString());
    };
    reader.readAsDataURL(file);
  }
};
</script>

<template>
  <input
    @change="onFileChange"
    accept="image/png, image/jpeg"
    class="hidden"
    id="avatar-select"
    type="file"
  />
  <label class="relative" for="avatar-select">
    <Avatar :src="avatarUrl" class="relative" size="xl" username="" />
    <div
      class="group absolute inset-0 flex cursor-pointer items-center justify-center rounded-full bg-black/40"
    >
      <IconCamera
        class="h-12 w-12 text-white transition group-hover:scale-110"
      />
    </div>
  </label>
</template>
