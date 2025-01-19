import React from 'react'
import { useLogic } from './logic'

type ContextType = ReturnType<typeof useLogic>

export const Context = React.createContext<ContextType>({} as ContextType)

export const useCreateFormContext = () => React.useContext(Context)
