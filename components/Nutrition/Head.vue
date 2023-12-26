<script setup lang="ts">
const targetDay = ref('FRIDAY')
const dayList = [
  {
    abbreviation: 'П',
    name: 'Понедельник',
    targetDayName: 'MONDAY',
    date: '12',
  },
  {
    abbreviation: 'В',
    name: 'Вторник',
    targetDayName: 'TUESDAY',
    date: '13',
  },
  {
    abbreviation: 'С',
    name: 'Среда',
    targetDayName: 'WEDNESDAY',
    date: '14',
  },
  {
    abbreviation: 'Ч',
    name: 'Четверг',
    targetDayName: 'THURSDAY',
    date: '15',
  },
  {
    abbreviation: 'П',
    name: 'Пятница',
    targetDayName: 'FRIDAY',
    date: '16',
  },
  {
    abbreviation: 'С',
    name: 'Суббота',
    targetDayName: 'SATURDAY',
    date: '17',
  },
  {
    abbreviation: 'В',
    name: 'Воскресенье',
    targetDayName: 'SUNDAY',
    date: '18',
  },
]

const currentDate = computed(() => {
  for (const day of dayList) {
    if (day.targetDayName === targetDay.value)
      return day
  }
})
</script>

<template>
  <!-- Блок текста с датой и днем недели -->
  <p class="text-center text-3xl font-bold text-white">
    {{ currentDate.name }}, {{ currentDate.date }}
  </p>
  <!-- Блок кнопок с выбором дня недели -->
  <div class="mt-5 grid grid-cols-7 gap-5 text-white">
    <div
      v-for="(day, index) in dayList"
      :key="index"
      class="flex flex-col gap-2 rounded-2xl bg-gray px-1 py-3 text-center"
      :class="{ 'bg-lime-light text-gray-dark': day.targetDayName === targetDay }"
      @click="targetDay = day.targetDayName"
    >
      <p>
        {{ day.abbreviation }}
      </p>
      <div class="relative mx-auto h-[26px] w-[26px] rounded-full bg-gray">
        <p class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
          {{ day.date }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
