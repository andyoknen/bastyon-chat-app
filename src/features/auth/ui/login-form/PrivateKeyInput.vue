<script setup lang="ts">
import { useField } from "vee-validate";

interface Props {
  name: string;
}

const props = defineProps<Props>();

const { value } = useField<string>(() => props.name, undefined, {
  initialValue: ""
});

const isPasswordVisible = ref(false);

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};

const inputType = computed(() => {
  return isPasswordVisible.value ? "text" : "password";
});

const canUseQr = computed(() => !value.value);
</script>

<template>
  <div class="relative w-full max-w-sm items-center">
    <Input
      :name="name"
      :type="inputType"
      class="pr-10"
      id="private-key-input"
      placeholder="Ваш приватный ключ для входа"
    />
    <label for="private-key-input">
      <span
        class="absolute inset-y-0 end-0 flex h-10 items-center justify-center px-2"
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
