<script setup lang="ts">
import { ModalsContainer } from 'vue-final-modal'
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="#B8282B" :height="2" />
    <NuxtPage />
    <Modals />
    <ModalsContainer />
  </NuxtLayout>
</template>
