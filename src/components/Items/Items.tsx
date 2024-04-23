import { useState, } from 'react';

import './Items.css';
import { items } from 'src/data/ItemsData';
import { categories } from 'src/data/Categories';
import { materials } from 'src/data/Materials';
import { seasons } from 'src/data/Seasons';
import { colors } from 'src/data/Colors';
import { styles } from 'src/data/Styles';


type ItemsProps = {
  categoryId: number
}

export default function Items(props: ItemsProps) {

  const [sortMethod, setSortMethod] = useState();
  const [filter, setFilter] = useState({
    category: props.categoryId,
    material: 9,
    season: 0,
    color: 0,
    style: 0,
  })


  return (
    <>
      {items.filter(
        (item) => {return item.categoryId.includes(filter.category)}
      )
      .filter(filter.material > 0 ? (item) => {return item.materialId?.includes(filter.material)} : () => {return true})
      .filter(filter.season > 0 ? (item) => {return item.seasonId == filter.season} : () => {return true})
      .filter(filter.color > 0 ? (item) => {return item.colorId?.includes(filter.color)} : () => {return true})
      .filter(filter.style > 0 ? (item) => {return item.styleId?.includes(filter.style)} : () => {return true})
      .map((item) => <div>{item.name}</div>)
      .sort(sortMethod)}
    </>
  )
}
