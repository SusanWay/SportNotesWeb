<script setup lang="ts">
import type { Training } from '~/types'

defineProps<Training>()

const emit = defineEmits<{
  (e: 'delete'): void
}>()

const isOpen = ref(false)
</script>

<template>
  <div class="flex items-center justify-between text-white">
    <p class="max-w-[180px] break-words text-2xl font-bold">
      {{ name }}
    </p>
    <div class="flex gap-1.5">
      <button class="rounded-lg bg-lime p-1.5" type="button" @click="isOpen = !isOpen">
        <Icon size="36" name="Nav/Arrow/Right" class="text-gray-dark" :class="{ 'rotate-90': isOpen }" />
      </button>
      <button class="rounded-lg bg-red p-1.5" type="button" @click="emit('delete')">
        <Icon size="36" name="Nav/Trash" class="text-gray-dark" />
      </button>
    </div>
  </div>
  <div v-if="isOpen" class="mt-2.5 flex flex-col gap-2.5 border-t border-white/25 py-2.5 text-white">
    <p class="rounded-xl border border-white/25 p-3 text-xl">
      Повторов: {{ repetitions }}
    </p>
    <p class="rounded-xl border border-white/25 p-3 text-xl">
      Подходов: {{ approaches }}
    </p>
  </div>
</template>

<style scoped>

</style>
