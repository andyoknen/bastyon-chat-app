<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { Form } from "vee-validate";
import { z } from "zod";

import { AvatarUploadWithCropper } from "../avatar-upload-with-cropper";

defineProps<{
  formId: string;
}>();

const formSchema = toTypedSchema(
  z.object({
    aboutMe: z.string().optional(),
    avatar: z.string().optional(),
    username: z.string().min(1)
  })
);

const onSubmit = data => {
  alert(JSON.stringify(data));
};
</script>

<template>
  <Form
    :id="formId"
    :validation-schema="formSchema"
    @submit="onSubmit"
    class="w-full space-y-2"
  >
    <AvatarUploadWithCropper class="mx-auto" name="avatar" />
    <Input
      label="Имя пользователя"
      name="username"
      placeholder="Введите ваше имя пользователя"
    />
    <Input
      label="О себе"
      name="aboutMe"
      placeholder="Расскажите немного о себе"
    />
  </Form>
</template>

<style scoped></style>
