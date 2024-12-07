import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from 'features/user'
import logger from 'redux-logger'

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware()

    if (process.env.NODE_ENV === 'development') {
      return middleware.concat(logger)
    }

    return middleware
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
