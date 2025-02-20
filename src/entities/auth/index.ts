import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { app } from 'shared/lib'

import { generateQuery } from 'entities/generate-query'
import { api } from '../api'
import { SuccessResponse } from '../type'

export const apiGoogleAuth = async () => {
  const provider = new GoogleAuthProvider()
  const auth = getAuth(app)

  const result = await signInWithPopup(auth, provider)
  GoogleAuthProvider.credentialFromResult(result)
  const idToken = await auth.currentUser?.getIdToken()

  const response = await api.get(
    `/api/auth/google${generateQuery({ idToken })}`,
  )
  return response
}

export interface User {
  id: string
  uid: string
}

export const apiAuthInfo = async () => {
  const response: SuccessResponse<User> = await api.get(`/api/auth/info`).json()
  return response
}
