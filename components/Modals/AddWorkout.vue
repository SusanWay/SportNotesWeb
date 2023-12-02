<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'

const selectContentList = [
  'Тренировка',
  'Бег',
]
</script>

<template>
  <VueFinalModal
    modal-id="addWorkout"
    class="fixed inset-0 z-20 bg-gray-dark px-5 py-7"
    :hide-overlay="true"
  >
    <div>
      <InputTitle text="Введите название тренировки" />
    </div>
  </VueFinalModal>
</template>

<style scoped>

</style>
