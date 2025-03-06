<script lang="ts" setup>
import type { NuxtError } from "#app";

defineProps<{
  error: NuxtError;
}>();
</script>

<template>
  <UApp>
    <UError :error="error" />
  </UApp>
</template>
