import AuthContext from "src/utils/AuthProvider/AuthProvider"
import { useContext, useEffect, useState } from "react"
import { User } from "src/data/Users"
import axios from "src/utils/axios"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"

const fetchUser_url = "/fetchUser"

type CabinetProps = {
  
}

export default function Cabinet(props: CabinetProps) {

  const user_id = useContext(AuthContext)

  const navigate = useNavigate()
  
  const [cookie, setCookie] = useCookies(["user"])

  const [user, setUser] = useState<User | null>(null)

  const fetchUser = async () => {
    await axios.get(fetchUser_url + '/' + user_id)
    .then((response) => {
      setUser(response.data);
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchUser()
  }, [])
  return (
    <>
      <div>{user?.login}</div>
      <div onClick={() => {
          setCookie("user", null, {path: "/"})
          navigate("/")
        }
      }>Выйти</div>
    </>
  )
}
