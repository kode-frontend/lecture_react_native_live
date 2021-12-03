import { CreateTodoParams } from "@pages/create-todo/types"
import { TodoListParams } from "@pages/todolist/types"

export type TTodoItem = {
  id: number
  text: string
  isCompleted: boolean
}

export type TState = {
  todos: TTodoItem[]
}

export type NavigationParamsList = {
  todolist: TodoListParams
  create: CreateTodoParams
}
