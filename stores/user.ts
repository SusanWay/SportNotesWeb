import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', () => {
  const user = ref<object | null>(null)
  const workoutList = ref<object[] | null>(null)
  const apiURl = 'http://localhost:3000/'
  async function getUser() {
    const response = await fetch(`${apiURl}users`)

    if (!response.ok)
      return

    user.value = await response.json()
  }
  async function getWorkouts() {
    const response = await fetch(`${apiURl}workouts`)

    if (!response.ok)
      return

    workoutList.value = await response.json()
  }

  return { user, workoutList, getUser, getWorkouts }
})
