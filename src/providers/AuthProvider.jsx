import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';

export const AuthContext = createContext()
function AuthProvider ({children}){
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const auth = getAuth(app);
    // sign up user
    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // sign in user
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // logout user
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    // update user details
    const userDetails = (name) => {
        setLoading(true);
        return updateProfile(auth?.currentUser, {
            name
        })
    }

    // obser user activity
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false);
        })
    
        return () => {
            setLoading(false);
            return unsubscribe();
        }
    }, [])
    const authInfo = {
        user, 
        loading,
        signUp,
        signIn,
        userDetails,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider