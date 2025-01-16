import { createWithEqualityFn } from 'zustand/traditional'

import { UserStoreType } from './type'

export const userStore = createWithEqualityFn<UserStoreType>((set) => ({
  user: null,
  action: {
    logIn: () => set({ user: 1 }),
    logOut: () => set({ user: null }),
  },
}))
