import { Item } from 'src/data/ItemsData';
import './ItemInfo.css';
import { categories } from 'src/data/Categories';


type ItemInfoProps = {
  item?: Item
  goBack: React.Dispatch<React.SetStateAction<number>>
}

export default function ItemInfo(props: ItemInfoProps) {

  if (props.item) return (
    <>
      <div className='item-info-container'>
        <div className='item-info-goback' onClick={() => props.goBack(-1)}>go back!</div>
        {props.item.name}
        {props.item.categoryId.map((itemCat) => categories.find((cat) => cat.categoryId === itemCat)?.title)}
        {props.item.categoryId.map((itemCat) => categories.map((cat) => cat.subCategories?.find((subcat) => subcat.categoryId === itemCat)?.title))}
      </div>
    </>
  );
  else return <></>
}
