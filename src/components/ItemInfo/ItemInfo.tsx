import { Item } from 'src/data/ItemsData';
import './ItemInfo.css';
import { categories } from 'src/data/Categories';
import { useState, useContext } from 'react';
import AuthContext from 'src/utils/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'src/utils/axios';


type ItemInfoProps = {
  item?: Item
  goBack: React.Dispatch<React.SetStateAction<number>>
  cameFromCab?: boolean
}

export default function ItemInfo(props: ItemInfoProps) {

  const [phHovered, setPhHovered] = useState(1)

  const [selectedPh, setSelectedPh] = useState(0)

  const [user, setUser] = useState(useContext(AuthContext))

  const handlePrev = (value: number) => {
    if (value) {
      setSelectedPh(selectedPh - 1)
    }
  }

  const handleNext = (value: number) => {
    if (!(value + 1 == props.item?.photos.length)) {
      setSelectedPh(selectedPh + 1)
    }
  }

  const handleCart = async (item: Item | undefined) => {
    if (!item || !item?.availability) return;
    if (user?.id) {
      await axios.post('/users/' + user?.id.toString() + '/addToCart',
      {item},
      {
        headers: { 'Content-Type' : 'application/json' },
        withCredentials: true
      })
      .then((res) => setUser(res.data))
      .catch((error) => console.log(error))
    } else navigate("/login")
  }

  const navigate = useNavigate()

  if (props.item) return (
    <>
      <div className='item-info-container'>
        <div className='item-info-upper'>
          <div className='item-info-goback' onClick={props.cameFromCab? () => navigate("/cabinet") : () => props.goBack(-1)}><i className="arrow"></i>Назад</div>
          <div className='item-info-cats'>
            {props.item.categoryId.map((itemCat) => <div className='item-info-cat'>{categories.find((cat) => cat.categoryId === itemCat)?.title}</div>)}
            {props.item.categoryId.map((itemCat) => categories.map((cat) => <div className='item-info-cat'>{cat.subCategories?.find((subcat) => subcat.categoryId === itemCat)?.title}</div>))}
          </div>
        </div>
        <div className='item-info-bottom'>
          <div className='item-info-info'>
            <div className='item-info-name'>{props.item.name}</div>
            <div className='item-info-avail'>В наличии {props.item.availability} шт.</div>
            <div className={'item-info-addcart'.concat(props.item.availability ? '' : ' disabled')} onClick={() => {handleCart(props.item)}}>В корзину</div>
          </div>
          <div className='item-info-photo' onMouseEnter={() => setPhHovered(1)} onMouseLeave={() => setPhHovered(0)}>
            <div className='item-info-photo-buttons'>
              <div className='item-info-photo-buttons-upper'>
                <div className={phHovered? 'item-info-photo-buttons-prev visible' : 'item-info-photo-buttons-prev hidden'} onClick={() => handlePrev(selectedPh)}></div>
                <div className={phHovered? 'item-info-photo-buttons-next visible' : 'item-info-photo-buttons-next hidden'}  onClick={() => handleNext(selectedPh)}></div>
              </div>
              <div className='item-info-photo-buttons-expand' onClick={() => {alert(1)}}></div>
            </div>
            {props.item.photos.length? <img className='item-info-photoImg' src={props.item.photos[selectedPh]}/> : <></>}
          </div>
        </div>
        
        
      </div>
    </>
  );
  else return <></>
}
