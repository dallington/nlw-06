import { ReactNode,  useState, useEffect } from 'react'
import { createStrictContext } from '../utils/context';
import { auth, firebase } from '../services/firebase'

type User = {
  id: string,
  name: string,
  avatar: string
}
type AuthContextType = {
  user: User | undefined,
  signInWithGoogle: () => Promise<void>
}

type ContextProviderType = {
    children: ReactNode
}

const [AuthProvider, useAuth] = createStrictContext<AuthContextType>({})

export function AuthContextProvider({ children } : ContextProviderType) {
    const [user, setUser] = useState<User>();

    const HandleAuthUser = (User:firebase.User | null):void => {
        if(User) {
            const { displayName, photoURL, uid } = User

            if(!displayName || !photoURL) {
                throw new Error('Missing information from Google Account');
            }

            setUser({
                id: uid,
                name: displayName,
                avatar: photoURL
            });
        }
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => HandleAuthUser(user))
        return () => {
            unsubscribe();
        }
    }, [])

    async function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        const result = await auth.signInWithPopup(provider);
        if(result.user) HandleAuthUser(result.user)
    }
    return (
        <AuthProvider value={{user, signInWithGoogle}} >
            {children}
        </AuthProvider>
    )
}

export { useAuth }
