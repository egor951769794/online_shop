import { Item } from 'src/data/ItemsData';
import './ItemListed.css';
import Link from '../ui/Link/Link';

import nopic from 'src/assets/icons/nopic.jpg'

type ItemListedProps = {
  item: Item
  goto: React.Dispatch<React.SetStateAction<number>>
}

export default function ItemListed(props: ItemListedProps) {
  
  return (
    <>
    <Link content={
        <div className='item-listed-container'>
          <img className='item-listed-bg' src={props.item.photos.length > 0? props.item.photos[0] : nopic}/>
          <div className='item-listed-bottom'>{props.item.name}</div>
        </div>
      }
      handler={() => props.goto(props.item.itemId)}
    />
      
    </>
  )
}
