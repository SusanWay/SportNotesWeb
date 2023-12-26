import { defineStore } from 'pinia'
import type { Training, Workout } from '~/types'

export const useWorkoutStore = defineStore('workoutStore', () => {
  const workoutList = ref<Workout[] | null>(null)
  const config = useRuntimeConfig()
  const apiURl = config.public.apiURL
  function getWorkouts(idUser: number, interval: string) {
    fetch(`${apiURl}workouts/${idUser}?interval=${interval}`)
      .then(async (response) => {
        if (!response.ok)
          throw new Error('Response not ok')
        workoutList.value = await response.json()
      })
      .catch(() => {
        workoutList.value = []
      })
  }
  function postWorkout(workoutType: string, trainList: Training[]) {
    const body = { type: workoutType, trainList }
    const requestBody = JSON.stringify(body)

    fetch(`${apiURl}workouts/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: requestBody,
    })
      .then((response) => {
        if (!response.ok)
          throw new Error('Network response was not ok')
      })
      .catch((error) => {
        // Обработка ошибок
        alert(`Произошла ошибка при добавлении тренировки: ${error}`)
      })
  }
  return { workoutList, getWorkouts, postWorkout }
})
