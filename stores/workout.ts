import { defineStore } from 'pinia'
import type { Workout } from '~/types'

export const useWorkoutStore = defineStore('workoutStore', () => {
  const workoutList = ref<Workout[] | null>(null)
  const config = useRuntimeConfig()
  const apiURl = config.public.apiURL
  async function getWorkouts(interval: string) {
    const response = await fetch(`${apiURl}workouts/1?interval=${interval}`)
    if (!response.ok)
      return

    workoutList.value = await response.json()
  }
  return { workoutList, getWorkouts }
})
