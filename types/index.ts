export interface Workout {
  name: string
  trainingList: Training[]
}
export interface Training {
  name: string
  approaches?: string
  repetition?: string
}
