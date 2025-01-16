import { create } from 'zustand'
import { UserStoreType } from './type'

export const userStore = create<UserStoreType>((set) => ({
  user: null,
  action: {
    logIn: () => set({ user: 1 }),
    logOut: () => set({ user: null }),
  },
}))
