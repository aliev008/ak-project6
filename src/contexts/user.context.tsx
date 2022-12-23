import { UserCredential } from "firebase/auth";
import { createContext, useEffect, useReducer } from "react"
import { createUserDocumentFromAuth, onUserAuthStateChanged } from "../utils/firebase/firebase.utils";
import { createAction } from "../utils/reducer/createAction.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: (user: any) => null
});

const USER_ACTION_TYPES = {
    SET_CURRENT_USER: "SET_CURRENT_USER",
}

const userReducer = (state: any, action: any) => {
    const {type, payload} = action;

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload,
            }
        default:
            throw new Error(`Unhandled type ${type} in userReducer`)
    }
}

const INITIAL_STATE = {
    currentUser: null,
}

export const UserProvider = ({children}: any) => {
    const [ state, dispatch] = useReducer(userReducer, INITIAL_STATE);
    const { currentUser } = state;

    const setCurrentUser = (user: any) => {
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
    }

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