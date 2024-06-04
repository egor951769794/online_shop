import { createContext } from "react";
import { useCookies } from "react-cookie";
import { User } from "src/data/Users";


const AuthContext = createContext<User | null>(null)

type AuthProviderProps = {
    content: JSX.Element
}

export const AuthProvider = (props: AuthProviderProps) => {

    const [cookie, setCookie] = useCookies(["user"])
    const user: User | null = cookie.user

    return (
        <AuthContext.Provider value={user}>
            {props.content}
        </AuthContext.Provider>
    )
}

export default AuthContext
