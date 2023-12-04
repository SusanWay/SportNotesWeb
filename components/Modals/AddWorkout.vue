<script setup lang="ts">
import { VueFinalModal, useVfm } from 'vue-final-modal'

const vfm = useVfm()
</script>

<template>
  <VueFinalModal
    modal-id="addWorkout"
    class="inset-0 flex flex-col justify-between bg-gray-dark px-5 py-7"
    :hide-overlay="true"
  >
    <button type="button" class="absolute left-6 top-6 z-10">
      <Icon name="Nav/Save" size="32" class="text-lime-light" />
    </button>
    <button type="button" class="absolute right-6 top-6 z-10" @click="vfm.close('addWorkout')">
      <div class="relative flex h-8 w-8">
        <span class="absolute top-1/3 h-0.5 w-full translate-y-1 rotate-45 bg-white" />
        <span class="absolute bottom-1/3 h-0.5 w-full -translate-y-1 -rotate-45 bg-white" />
      </div>
    </button>
    <div class="mt-2.5">
      <InputTitle text="Название тренировки" />
    </div>
  </VueFinalModal>
</template>

<style scoped>

</style>
