import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', () => {
  const user = ref<object | null>(null)
  const workoutList = ref<object[] | null>(null)

  const config = useRuntimeConfig()

  const apiURl = config.public.apiURL
  async function getUser() {
    const response = await fetch(`${apiURl}users`)
    if (!response.ok)
      return

    user.value = await response.json()
  }
  async function getWorkouts(interval: string) {
    const response = await fetch(`${apiURl}workouts/1?interval=${interval}`)
    if (!response.ok)
      return

    workoutList.value = await response.json()
  }

  return { user, workoutList, getUser, getWorkouts }
})
