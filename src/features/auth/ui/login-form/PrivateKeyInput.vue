<script setup lang="ts">
const modelValue = defineModel<string>("modelValue", { required: true });

const isPasswordVisible = ref(false);

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};

const inputType = computed(() => {
  return isPasswordVisible.value ? "text" : "password";
});
const canUseQr = computed(() => !modelValue.value);
</script>

<template>
  <div class="relative w-full max-w-sm items-center">
    <Input
      :type="inputType"
      class="pr-10"
      id="private-key-input"
      placeholder="Ваш приватный ключ для входа"
      v-model="modelValue"
    />
    <label for="private-key-input">
      <span
        class="absolute inset-y-0 end-0 flex items-center justify-center px-2"
      >
        <IconQR class="size-6" v-if="canUseQr" />
        <button @click="togglePasswordVisibility" type="button" v-else>
          <IconEye class="size-6" v-if="isPasswordVisible" />
          <IconEyeOff class="size-6" v-else />
        </button>
      </span>
    </label>
  </div>
</template>

<style scoped></style>
