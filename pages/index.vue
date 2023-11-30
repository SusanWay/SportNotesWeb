<script setup lang="ts">
import { useUserStore } from '~/stores/user'

const userStore = useUserStore()

onMounted(
  userStore.getUser,
)
</script>

<template>
  <pre class="my-80 text-center text-white">
    {{ userStore.user }}
  </pre>
</template>

<style scoped>
</style>
