<script setup lang="ts">
import { VueFinalModal, useVfm } from 'vue-final-modal'
import { useForm } from 'vee-validate'
import type { Training } from '~/types'
import { useWorkoutStore } from '~/stores/workout'

interface WorkoutForm {
  workoutName: string
  trainingName: string
  trainingApproaches: number
  trainingRepetitions: number
}

const vfm = useVfm()
const { values } = useForm<WorkoutForm>()
const workoutStore = useWorkoutStore()
const isEnabled = computed(() => {
  return values.trainingName && values.trainingApproaches && values.trainingRepetitions
})

const trainList = ref<Training[]>([])

function addTrain() {
  trainList.value.push({
    name: values.trainingName,
    approaches: values.trainingApproaches,
    repetitions: values.trainingRepetitions,
    weight: 100,
  })
}

function removeTrain(index: number) {
  trainList.value.splice(index, 1)
}

function submitForm() {
  workoutStore.postWorkout(values.workoutName || 'Тренировка зажима', trainList.value)
}
</script>

<template>
  <VueFinalModal
    modal-id="addWorkout"
    class="bg-gray-dark"
    :hide-overlay="true"
    :click-to-close="false"
  >
    <div class="absolute inset-0 h-full overflow-auto px-5 py-7">
      <button type="button" class="absolute left-6 top-6 z-10" :disabled="!trainList.length" @click="submitForm">
        <Icon name="Nav/Save" size="32" :class="{ 'text-lime-light': trainList.length, 'text-white': !trainList.length }" />
      </button>
      <button type="button" class="absolute right-6 top-6 z-10" @click="vfm.close('addWorkout')">
        <div class="relative flex h-7 w-7">
          <span class="absolute top-1/3 h-0.5 w-full translate-y-1 rotate-45 bg-white" />
          <span class="absolute bottom-1/3 h-0.5 w-full -translate-y-1 -rotate-45 bg-white" />
        </div>
      </button>
      <form class="border-b border-white py-2.5" @submit.prevent="addTrain">
        <InputTitle class="mt-2.5" name="workoutName" text="Название тренировки" />
        <InputText class="mt-2.5" name="trainingName" text="Название упражнения" type="text" />
        <InputText class="mt-2.5" name="trainingApproaches" text="Кол-во подходов" type="number" />
        <InputText class="mt-2.5" name="trainingRepetitions" text="Кол-во повторов" type="number" />
        <Button class="mt-2.5 w-full" :disabled="!isEnabled" type="submit">
          Добавить Тренировку
        </Button>
      </form>
      <div class="mt-5">
        <p class="text-center text-2xl font-bold text-white">
          Упражнения
        </p>
        <div v-for="(training, index) in trainList" :key="index" class="mt-2.5 rounded-lg border border-white/25 p-3">
          <TrainFormElement v-bind="training" @delete="removeTrain(index)" />
        </div>
      </div>
    </div>
  </VueFinalModal>
</template>

<style scoped>

</style>
