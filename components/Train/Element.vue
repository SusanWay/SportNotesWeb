<script setup lang="ts">
import type { Training } from '~/types'

defineProps<Training>()
</script>

<template>
  <div class="text-center text-white">
    <p class="text-xl font-bold">
      {{ name }}
    </p>
    <p class="font-title font-light">
      {{ repetitions }} раз
    </p>
  </div>
  <p class="text-3xl font-bold text-lime-light">
    x{{ approaches }}
  </p>
</template>

<style scoped>

</style>
