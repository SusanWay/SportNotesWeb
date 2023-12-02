<script setup lang="ts">
interface Props {
  text: string
}

defineProps<Props>()

// Переменная, которая отвечает за контент внутри инпута
const inputValue = ref('')
</script>

<template>
  <div class="group relative">
    <!-- validate-on-input используется, чтобы производить постоянную проверку валидации при первом ее провале -->
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
