<script setup lang="ts">
import { useUserStore } from '~/stores/user'

const userStore = useUserStore()
const selectedInterval = ref('month')
const intervalList = [
  { interval: 'year', text: 'Год' },
  { interval: 'month', text: 'Месяц' },
  { interval: 'week', text: 'Неделя' },
]

onMounted(
  userStore.getWorkouts,
)
</script>

<template>
  <div class="px-4 py-10">
    <!-- Кнопка добавление тренировки -->
    <div class="flex px-5">
      <Button class="w-full">
        Добавить тренировку
      </Button>
    </div>
    <!-- Список тренировок -->
    <div class="mt-7">
      <p class="text-center text-3xl font-bold text-white">
        Ваши тренировки
      </p>
      <div class="mt-2.5 grid grid-cols-3 gap-10 rounded-xl bg-gray px-4 py-2">
        <button v-for="(interval, index) in intervalList" :key="index" class="rounded-lg border border-white/25 px-4 py-2 text-white" :class="{ 'border-0 bg-lime': selectedInterval === interval.interval }" @click="selectedInterval = interval.interval">
          {{ interval.text }}
        </button>
      </div>
      <div class="mt-2.5 flex flex-col gap-5">
        <WorkoutCard v-for="(workout, index) in userStore.workoutList" :key="index" v-bind="workout" />
        <WorkoutEmptyState v-if="userStore.workoutList === null" class="mt-40" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
