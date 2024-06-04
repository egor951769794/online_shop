import { Item } from 'src/data/ItemsData';
import axios from 'src/utils/axios';
import './ItemInCart.css';
import Link from '../ui/Link/Link';
import { useState, useContext } from 'react';
import AuthContext from 'src/utils/AuthProvider/AuthProvider';
import { User } from 'src/data/Users';

import nopic from 'src/assets/icons/nopic.jpg'
import { useNavigate } from 'react-router-dom';

type ItemInCartProps = {
  item: Item | undefined,
  user: User | undefined,
  setUser: React.Dispatch<React.SetStateAction<User | null>>
}

export default function ItemInCart({item, user, setUser}: ItemInCartProps) {

  // const [user, setUser] = useState(useContext(AuthContext))

  const navigate = useNavigate()

  const [itemHovered, setItemHovered] = useState(false)

  const handleItemDeletion = async () => {
    if (!item) return;
    await axios.post('users/' + user?.id.toString() + '/removeFromCart',
    {item},
    {
      headers: { 'Content-Type' : 'application/json' },
      withCredentials: true
    })
    .then((res) => setUser(res.data))
    .catch((error) => console.log(error))
  }
  
  if (item) return (
    <>
    <Link content={
        <div onMouseEnter={() => setItemHovered(true)} onMouseLeave={() => setItemHovered(false)} className='item-cart-container'>
          <img className='item-cart-bg' 
            onClick={() => navigate("/items", {state: {whatToDisplay: item.itemId}})}
            src={item.photos.length > 0? item.photos[0] : nopic}/>
          <div className='item-cart-bottom'> 
            {itemHovered? 
              <div onClick={handleItemDeletion} className='item-listed-bottom-name'>Удалить из корзины</div> :
              <>
                <div className='item-listed-bottom-price'>{item.price + ' ₽'}</div>
                <div onClick={handleItemDeletion} className='item-listed-bottom-name'>{item.name}</div>
              </>}
            </div>
        </div>
      }
      handler={() => {}}
    />
    </>
  ) 
  return <></>
}
