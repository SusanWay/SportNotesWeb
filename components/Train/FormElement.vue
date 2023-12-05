<script setup lang="ts">
import type { Training } from '~/types'

defineProps<Training>()
</script>

<template>
  <div class="gap-5 text-center text-white">
    <p class="text-2xl font-bold">
      {{ name }}
    </p>
    <p class="font-title font-light">
      {{ repetitions }}x{{ approaches }}
    </p>
  </div>
</template>

<style scoped>

</style>
