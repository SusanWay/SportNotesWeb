<script setup lang="ts">

</script>

<template>
  <footer class="sticky bottom-0 z-10 flex w-full items-center justify-around gap-5 bg-gray px-7 py-3 ">
    <NuxtLink to="/workouts">
      <Icon name="Menu/DumbbellLarge" size="40" class="text-white" />
    </NuxtLink>
    <NuxtLink to="/#">
      <div class="relative h-14 w-14 rounded-full bg-lime">
        <span class="absolute left-1/2 top-1/2 h-1 w-8 -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-black" />
        <span class="absolute left-1/2 top-1/2 h-8 w-1 -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-black" />
      </div>
    </NuxtLink>
    <NuxtLink to="/#">
      <Icon name="Menu/FoodOutLine" size="40" class="text-white" />
    </NuxtLink>
  </footer>
</template>

<style scoped>

</style>
