import { createContext, useState } from "react";


const AuthContext = createContext<AuthType | null>(null)

export type AuthType = {
    authorized: boolean,
    authorize: React.Dispatch<React.SetStateAction<boolean>>
}

type AuthProviderProps = {
    content: JSX.Element
}

export const AuthProvider = (props: AuthProviderProps) => {
    const [auth, setAuth] = useState(false)
    const authProps: AuthType = {
        authorized: auth,
        authorize: setAuth
    }

    return (
        <AuthContext.Provider value={authProps}>
            {props.content}
        </AuthContext.Provider>
    )
}

export default AuthContext
