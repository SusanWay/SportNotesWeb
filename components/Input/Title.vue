<script setup lang="ts">
import { useField } from 'vee-validate'

interface Props {
  text: string
  name: string
}

const props = defineProps<Props>()

const { value: inputValue } = useField(props.name)
</script>

<template>
  <div class="group relative">
    <input
      v-model="inputValue"
      type="text"
      class="w-full border-b border-white bg-gray-dark px-5 py-2.5 text-center text-xl text-white placeholder:text-white focus:outline-none focus:placeholder:text-gray-dark"
      :placeholder="text"
    >
  </div>
</template>

<style scoped>

</style>
