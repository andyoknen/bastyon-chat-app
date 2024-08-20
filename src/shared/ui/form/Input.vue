<script setup lang="ts">
import { useField } from "vee-validate";
import { HTMLAttributes } from "vue";

interface Props {
  class?: HTMLAttributes["class"];
  label: string;
  modelValue?: string;
  name: string;
  placeholder?: string;
  type?: string;
}

const props = defineProps<Partial<Props>>();
const { errorMessage, value } = useField(() => props.name, undefined, {
  syncVModel: true
});
</script>

<template>
  <FieldWrapper :error-message="errorMessage" :label="label" :name="name">
    <input
      :class="[
        errorMessage && 'border-color-bad',
        !errorMessage && 'border-neutral-grad-2',
        props.class
      ]"
      :placeholder="placeholder"
      :type="props.type"
      class="bg-background ring-offset-background focus-visible:ring-ring flex h-10 w-full rounded-lg border px-2 py-1 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      v-model="value"
    />
  </FieldWrapper>
</template>
