import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', () => {
  const user = ref<object | null>(null)
  const config = useRuntimeConfig()
  const apiURl = config.public.apiURL
  async function getUser() {
    const response = await fetch(`${apiURl}users`)
    if (!response.ok)
      return

    user.value = await response.json()
  }

  return { user, getUser }
})
