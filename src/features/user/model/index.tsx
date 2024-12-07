import { createSlice } from '@reduxjs/toolkit'

export interface IUser {
  id?: string
}

const initialState: IUser = {
  id: undefined,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.id = action.payload
    },
    logOut: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.id = undefined
    },
  },
})

export const { logIn, logOut } = userSlice.actions
export const userReducer = userSlice.reducer
