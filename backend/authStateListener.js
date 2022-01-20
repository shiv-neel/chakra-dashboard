import { getAuth, onAuthStateChanged } from 'firebase/auth'

const auth = getAuth()
const user = auth.currentUser

onAuthStateChanged(auth, user => {
    if (user)
        console.log('signed in')
    else
        console.log('not signed in')
})