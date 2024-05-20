import { Item } from 'src/data/ItemsData';
import './ItemInfo.css';
import { categories } from 'src/data/Categories';
import { useState } from 'react';


type ItemInfoProps = {
  item?: Item
  goBack: React.Dispatch<React.SetStateAction<number>>
}

export default function ItemInfo(props: ItemInfoProps) {

  const [phHovered, setPhHovered] = useState(1)

  const [selectedPh, setSelectedPh] = useState(0)

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

  if (props.item) return (
    <>
      <div className='item-info-container'>
        <div className='item-info-upper'>
          <div className='item-info-goback' onClick={() => props.goBack(-1)}><i className="arrow"></i>Назад</div>
          <div className='item-info-cats'>
            {props.item.categoryId.map((itemCat) => <div className='item-info-cat'>{categories.find((cat) => cat.categoryId === itemCat)?.title}</div>)}
            {props.item.categoryId.map((itemCat) => categories.map((cat) => <div className='item-info-cat'>{cat.subCategories?.find((subcat) => subcat.categoryId === itemCat)?.title}</div>))}
          </div>
        </div>
        <div className='item-info-bottom'>
          <div className='item-info-info'>
            {props.item.name}
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
            {/* <img className='item-info-photoImg visible' src={props.item.photos[selectedPh]}/> */}
            {/* <div>{props.item.photos.map((ph) => <img className='item-info-photo' src={ph}></img>)}</div> */}
          </div>
        </div>
        
        
      </div>
    </>
  );
  else return <></>
}
