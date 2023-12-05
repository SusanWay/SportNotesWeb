import { defineStore } from 'pinia'
import type { Workout, Training } from '~/types'

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
  async function postWorkout(workoutType: string, trainList: Training[]){
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
      .then((data) => {
        // Обработка успешного ответа от сервера
        alert(`Успешно добавлено: ${JSON.stringify(data)}`)
      })
      .catch((error) => {
        // Обработка ошибок
        alert(`Произошла ошибка при добавлении тренировки: ${error}`)
      })
  }
  return { workoutList, getWorkouts, postWorkout }
})
