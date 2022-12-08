import { UserCredential } from "firebase/auth";
import { createContext, useState, useEffect } from "react"
import { createUserDocumentFromAuth, onUserAuthStateChanged } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: (user: any) => null
});

export const UserProvider = ({children}: any) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value: any = {currentUser, setCurrentUser};

    useEffect(() => {
        const unsubscribe = onUserAuthStateChanged((user: UserCredential) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user as any);
        })

        return unsubscribe;
    },[])    

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}