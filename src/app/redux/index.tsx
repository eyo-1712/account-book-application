import { configureStore } from '@reduxjs/toolkit'
import { userStore } from 'features/user'

export const store = configureStore({
  reducer: {
    user: userStore,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
