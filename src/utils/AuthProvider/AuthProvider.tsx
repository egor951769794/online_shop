import { createContext, useState } from "react";

const AuthContext = createContext({})

type AuthProviderProps = {
    content: JSX.Element
}

export const AuthProvider = (props: AuthProviderProps) => {
    const [auth, setAuth] = useState({})

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {props.content}
        </AuthContext.Provider>
    )
}

export default AuthContext
