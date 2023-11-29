import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', () => {
  const user = ref<object>({})

  const apiURl = 'http://localhost:3000/users'
  async function getUser() {
    const response = await fetch(apiURl)

    if (!response.ok) {
      user.value = { error: `Ошибка: ${response.status}` }
      return
    }
    const result = await response.json()
    user.value = result
  }
  return { user, getUser }
})
