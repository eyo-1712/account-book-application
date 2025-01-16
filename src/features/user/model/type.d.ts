interface UserStoreState {
  user: number | null
}

interface UserStoreAction {
  logIn: () => void
  logOut: () => void
}

export type UserStoreType = UserStoreState & { action: UserStoreAction }
