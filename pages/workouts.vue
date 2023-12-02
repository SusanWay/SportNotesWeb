<script setup lang="ts">
import { useWorkoutStore } from '~/stores/workout'

const workoutStore = useWorkoutStore()
const selectedInterval = ref('month')
const intervalList = [
  { interval: 'year', text: 'Год' },
  { interval: 'month', text: 'Месяц' },
  { interval: 'week', text: 'Неделя' },
]

onMounted(
  async () => {
    await workoutStore.getWorkouts(selectedInterval.value)
  },
)
</script>

<template>
  <div class="px-4 py-5">
    <!-- Список тренировок -->
    <p class="text-center text-3xl font-bold text-white">
      Мои тренировки
    </p>
    <div class="mt-2.5 grid grid-cols-3 gap-10 rounded-xl bg-gray px-4 py-2">
      <button
        v-for="(interval, index) in intervalList"
        :key="index"
        class="rounded-lg border border-white/25 px-4 py-2 text-white"
        :class="{ 'border-0 bg-lime': selectedInterval === interval.interval }"
        @click="[selectedInterval = interval.interval, workoutStore.getWorkouts(selectedInterval)]"
      >
        {{ interval.text }}
      </button>
    </div>
    <div class="mt-2.5 flex flex-col gap-5">
      <WorkoutCard v-for="(workout, index) in workoutStore.workoutList" :key="index" v-bind="workout" />
      <WorkoutEmptyState v-if="workoutStore.workoutList === null" class="mt-40" />
    </div>
  </div>
</template>

<style scoped>

</style>
