import { api } from 'entities/api'
import { generateQuery } from 'entities/generate-query'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { app } from 'shared/lib'

export const apiAuthGoogle = async () => {
  const provider = new GoogleAuthProvider()
  const auth = getAuth(app)

  const result = await signInWithPopup(auth, provider)
  GoogleAuthProvider.credentialFromResult(result)
  const idToken = await auth.currentUser?.getIdToken()

  await api.get(`/api/auth/google${generateQuery({ idToken })}`)
}
