<script setup lang="ts">
</script>

<template>
  <div class="bg-[#10151A]">
    <div class="mx-auto flex h-full min-h-screen max-w-[640px] flex-col bg-gray-dark">
      <LayoutHeader />
      <div class="flex-auto">
        <slot />
      </div>
      <LayoutFooter />
    </div>
  </div>
</template>
