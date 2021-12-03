import React, { createContext, Dispatch, useReducer } from "react"
import { TState } from "types"

import { TActions, todoReducer } from './reducer'

type TContext = {
  state: TState,
  dispatch: Dispatch<TActions>
}

const initialState: TState = {
  todos: [
    {
      id: 10,
      text: 'Сделать тестовое задание',
      isCompleted: true,
    },
    {
      id: 12,
      text: 'Прочитать карманную книгу TypeScript',
      isCompleted: false,
    },
    {
      id: 13,
      text: 'Сделать домашку по TypeScript',
      isCompleted: false,
    },
  ]
}

const mainReducer = ({ todos }: TState, action: TActions) => ({
  todos: todoReducer(todos, action)
})

export const Context = createContext<TContext>({
  state: initialState,
  dispatch: () => null
})

export const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState)

  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  )
}
