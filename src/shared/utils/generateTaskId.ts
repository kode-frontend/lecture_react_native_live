import { TTodoItem } from "types"

export const generateTaskId = (todos: TTodoItem[]) => {
  return todos.reduce((acc, cur) => {
    return cur.id > acc ? cur.id : acc
  }, 0) + 1
}