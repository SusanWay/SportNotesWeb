<script setup lang="ts">
const props = defineProps<{
  disabled?: boolean
  loading?: boolean
  block?: boolean
  to?: string
}>()

const component = computed(() => {
  if (props.to)
    return resolveComponent('NuxtLink')
  return 'button'
})
</script>

<template>
  <component
    :is="component"
    :to="to"
    :disabled="disabled"
    class="inline-flex h-14 items-center justify-center gap-2.5 rounded-2xl bg-lime px-7 font-title text-base font-extrabold uppercase text-white transition-colors duration-300 hover:bg-lime-light hover:text-black"
    :class="{ 'w-full': block }"
  >
    <span :class="{ 'opacity-0': loading }">
      <slot />
    </span>
  </component>
</template>
