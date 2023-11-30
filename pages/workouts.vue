<script setup lang="ts">
const workoutList = [
  {
    name: 'Workout',
    trainingList: [
      {
        name: 'Отжимания',
        approaches: 6,
        repetition: 25,
      },
      {
        name: 'Приседания',
        approaches: 4,
        repetition: 50,
      },
    ],
  },
  {
    name: 'Workout',
    trainingList: [
      {
        name: 'Отжимания',
        approaches: 6,
        repetition: 25,
      },
      {
        name: 'Приседания',
        approaches: 4,
        repetition: 50,
      },
    ],
  },
  {
    name: 'Workout',
    trainingList: [
      {
        name: 'Отжимания',
        approaches: 6,
        repetition: 25,
      },
      {
        name: 'Приседания',
        approaches: 4,
        repetition: 50,
      },
    ],
  },
]
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
    <div class="mt-10">
      <p class="text-center text-3xl font-bold text-white">
        Ваши тренировки
      </p>
      <div class="mt-2.5 flex flex-col gap-5">
        <WorkoutCard v-for="(workout, index) in workoutList" :key="index" v-bind="workout" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
