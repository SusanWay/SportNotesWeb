<script setup lang="ts">
import { useField } from 'vee-validate'

interface Props {
  name: string
  text: string
  type: 'number' | 'text'
}

const props = defineProps<Props>()

// Переменная errorMessage принимает в себя error-значение(string) после валидации - используется в showError и отоброжении ошибок
// Переменная value связка через v-modal со значениями в input
const { value: inputValue } = useField(props.name)
// Переменная, которая используется при focus эффекте на input
const isFocused = ref(false)

// Настройка патернов v-mask
// А: Включает в себя все симловы, кроме поблов и отступов - используется для поля Почта
// В: Включает в себя только символы русского и английского алфавитов - используется для поля Имя
const options = {
  tokens: {
    A: {
      pattern: /[0-9]/,
      multiple: true,
    },
    B: {
      pattern: /[A-Za-zА-Яа-я]/,
      multiple: true,
    },
  },
}
// Отвечает за анимацию во время focus эффекта на input, так же не позволяет опуститься тексту, когда input не пустой
const isActive = computed(() => {
  return isFocused.value || inputValue.value
})

// Отвечает за выбор паттерна ввода для разные типов input
const maskPattern = computed(() => {
  switch (props.type) {
    case 'text':
      return 'B'
  }
  return 'A'
})
</script>

<template>
  <div class="group relative">
    <!-- Текст подсказка, которая выводится поверх input -->
    <span class="pointer-events-none absolute left-5 select-none text-white/60 duration-300" :class="{ 'translate-y-2 text-sm': isActive, 'translate-y-5': !isActive }">
      {{ text }}
    </span>
    <!-- validate-on-input используется, чтобы производить постоянную проверку валидации при первом ее провале -->
    <input
      v-model="inputValue"
      v-maska:[options]
      :data-maska="maskPattern"
      :type="type"
      class="w-full rounded-xl bg-gray p-5 text-xl text-white focus:outline-none"
      :name="name"
      @focus="isFocused = true"
      @blur="isFocused = false"
    >
  </div>
</template>

<style scoped>

</style>
