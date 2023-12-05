<script setup lang="ts">
import type { Workout } from '~/types'

defineProps<Workout>()

const isActive = ref(false)
</script>

<template>
  <div class="rounded-2xl bg-gray px-8 py-5" @click="isActive = !isActive">
    <div class="flex justify-between" :class="{ 'pb-5': isActive }">
      <div>
        <Icon name="Workout/DumbBell" size="52" class="text-lime-light" />
        <p class="text-xl font-bold text-white">
          {{ type }}
        </p>
      </div>
      <Icon name="NavArrow/Right" size="34" class="my-auto text-lime-light" :class="{ 'rotate-90': isActive }" />
    </div>
    <div v-if="isActive" class="flex flex-col">
      <div v-for="(training, index) in trainList" :key="index" class="flex flex-row items-center justify-between border-t border-white/25 py-3">
        <TrainElement v-bind="training" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
