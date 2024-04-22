import { useState, } from 'react';

import './Items.css';
import { items } from 'src/data/ItemsData';


type ItemsProps = {
  categoryId: number
}

export default function Items(props: ItemsProps) {

  const [sortMethod, setSortMethod] = useState();
  const [filter, setFilter] = useState({
    category: props.categoryId,
    material: 10,
    season: 0,
    color: 0,
    sport: 0,
    brand: 0
  })


  return (
    <>
      {items.filter(
        (item) => {return item.categoryId == filter.category}
      )
      .filter(filter.material > 0 ? (item) => {return item.material?.map((material) => material.id).includes(filter.material)} : () => {return true})
      .filter(filter.season > 0 ? (item) => {return item.season?.id == filter.season} : () => {return true})
      .filter(filter.color > 0 ? (item) => {return item.color?.map((color) => color.id).includes(filter.color)} : () => {return true})
      .filter(filter.sport > 0 ? (item) => {return item.sport?.id == filter.sport} : () => {return true})
      .filter(filter.brand > 0 ? (item) => {return item.brand?.id == filter.brand} : () => {return true})
      .map((item) => <div>{item.name}</div>)
      .sort(sortMethod)}
    </>
  )
}
