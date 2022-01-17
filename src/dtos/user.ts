import { Todo } from "./todo"

export type User = {
  id: string
  name: string
  password?: string
  email: string
  about: string
  age: number
  ["to-dos"]: Todo[]
}
