<script setup lang="ts">
</script>

<template>
  <div class="flex h-full min-h-screen flex-col bg-gray-dark">
    <LayoutHeader />
    <div class="flex-auto">
      <slot />
    </div>
    <LayoutFooter />
  </div>
</template>
