import React, { Dispatch, ReactNode, useReducer } from 'react'
import { createContext } from 'use-context-selector'
import { DEBUG } from '../constants'
import GlobalStateReducer, { initialState, State, Action } from './GlobalStateReducer'
import { logger } from './ReducerLogger'

interface Props {
  children?: ReactNode
}

interface Context {
  globalState: State
  dispatch: Dispatch<Action>
}

export const GlobalContext = createContext<Context>({} as Context)

const GlobalStateProvider = ({ children }: Props) => {
  const reducer = DEBUG ? logger(GlobalStateReducer) : GlobalStateReducer
  const [globalState, dispatch] = useReducer(reducer, initialState)

  return (
    <GlobalContext.Provider value={{ globalState, dispatch }}>{children}</GlobalContext.Provider>
  )
}

export default GlobalStateProvider
