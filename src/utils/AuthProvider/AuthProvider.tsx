import { createContext } from "react";
import { useCookies } from "react-cookie";


const AuthContext = createContext<Number | null>(null)

type AuthProviderProps = {
    content: JSX.Element
}

export const AuthProvider = (props: AuthProviderProps) => {

    const [cookie, setCookie] = useCookies(["user"])
    const user: Number | null = cookie.user

    return (
        <AuthContext.Provider value={user}>
            {props.content}
        </AuthContext.Provider>
    )
}

export default AuthContext
