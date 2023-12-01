export interface Workout {
  type: string
  trainList: Training[]
}
export interface Training {
  name: string
  approaches?: string
  repetitions?: string
}
