import AuthContext from "src/utils/AuthProvider/AuthProvider"
import { useContext, useEffect, useState } from "react"
import { User } from "src/data/Users"
import axios from "src/utils/axios"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"


import './Cabinet.css';

import { items } from "src/data/ItemsData"
import { Item } from "src/data/ItemsData"
import ItemInCart from "../ItemInCart/ItemInCart"

const fetchUser_url = "/fetchUser"

type CabinetProps = {
  
}

export default function Cabinet(props: CabinetProps) {

  const [user, setUser] = useState(useContext(AuthContext))

  const sumArray = (arr: (number | undefined)[] | undefined) => {
    if (!arr) return 0;
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
      if (arr) sum += arr[i] ?? 0
    }
    return sum
  }

  const fetchUser = async () => {
    await axios.get(fetchUser_url + '/' + user?.id)
    .then((response) => {
      setUser(response.data);
      console.log(user?.cart)
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchUser()
  }, [])

  const navigate = useNavigate()
  
  const [cookie, setCookie] = useCookies(["user"])

  return (
    <>
      <div className="cabinet-wrapper">
        <div className="cabinet-left">
          <div className="cabinet-user-info">
            <div className="cabinet-username">{user?.login}</div>
          </div>
          <div 
            onClick={user?.cart.length? () => {/* оформление заказа */} : () => {/* pass */}} 
            className={"cabinet-order".concat(user?.cart.length? '' : ' disabled')}>Оформить заказ 
            <span>{' ' + sumArray(user?.cart.map(item => items.find((_item) => _item.itemId === item)?.price))}₽</span>
          </div>
          <div className='cabinet-button-quit' onClick={() => {
            setCookie("user", null, {path: "/"})
            navigate("/")
          }
        }>Выйти</div>
        </div>
        <div className="cabinet-right">
          <div className="cabinet-right-cart">
            <div className="cabinet-right-cart-header">Корзина <span className="cabinet-right-cart-len">{user?.cart.length}</span></div>
            <div className="cabinet-right-cart-list">
              {user?.cart.map((item) => <ItemInCart user={user} setUser={setUser} item={ items.find((_item) => _item.itemId === item)}></ItemInCart>)}
            </div>
          </div>
        </div>
        <div>{user?.cart.length}</div>
      </div>
    </>
  )
}
