import { initializeApp } from "firebase/app"
import { GoogleAuthProvider, getAuth, signInWithRedirect, signOut } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import React, { useContext, createContext} from 'react'

const firebaseConfig = {
    apiKey: 'AIzaSyClmDSB5-u0Po3godPW3WLyyGOZnQm1XPE',
    authDomain: "fir-auth-demo-da4bc.firebaseapp.com",
    projectId: "fir-auth-demo-da4bc",
    storageBucket: "fir-auth-demo-da4bc.appspot.com",
    messagingSenderId: "583381011304",
    appId: "1:583381011304:web:7cc8edfd3ddc989996a4dd"
}
  
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)


const provider = new GoogleAuthProvider()
provider.addScope('https://www.googleapis.com/auth/contacts/readonly')




const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const value = authentication()
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuthProvider = () => {
    return useContext(AuthContext)
}

const authentication = () => {
    const googleSignIn = async () => await signInWithRedirect(auth, provider)
    const authSignOut = async () => {
        return await signOut(auth)
    }
    return { googleSignIn, authSignOut }
}
