import React, { createContext, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext()
function AuthProvider ({children}){
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const auth = getAuth(app);
    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        user, 
        loading,
        signUp,
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider