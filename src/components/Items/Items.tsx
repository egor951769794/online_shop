import { useState, } from 'react';

import './Items.css';
import { items } from 'src/data/ItemsData';

import ItemsFilter from '../ItemsFilter/ItemsFilter';
import ItemsList from '../ItemsList/ItemsList';

import FilterElement from '../ui/FilterElement/FilterElement';

import { colors, materials, seasons, sizes, shoeSizes, styles } from 'src/data/Properties';

type ItemsProps = {
  categoryId: number
}

export default function Items(props: ItemsProps) {

  const [sortMethod, setSortMethod] = useState();
  const [filter, setFilter] = useState({
    category: props.categoryId,
    material: [0],
    season: 0,
    color: [0],
    style: [0],
  })

  const handlePropertiesSelection = (n: number, arr: number[]) => {
    if (arr.includes(0)) return [n]
    else if (arr.includes(n) && arr.length != 1) return arr.slice(0, arr.indexOf(n)).concat(arr.slice(arr.indexOf(n) + 1))
    else if (arr.includes(n) && arr.length == 1) return [0]
    else return arr.slice().concat([n])
  }

  const checkSelection = (n: number, arr: number[]) => {
    return arr.includes(n);
  }

  return (
    <>
      <div className='items-wrapper'>
        <ItemsFilter 
          content={
            <>
              <FilterElement 
                title="Материал" 
                filter={(n: number) => setFilter({...filter, material: handlePropertiesSelection(n, filter.material)})}
                properties={materials}
                state={filter}
                checkSelection={(n: number) => checkSelection(n, filter.material)}
              />
              <FilterElement 
                title="Сезон" 
                filter={(n: number) => setFilter({...filter, season: filter.season == n? 0 : n})}
                properties={seasons}
                state={filter}
                checkSelection={(n: number) => {return filter.season == n}}
              />
              <FilterElement 
                title="Цвет" 
                filter={(n: number) => setFilter({...filter, color: handlePropertiesSelection(n, filter.color)})}
                properties={colors}
                state={filter}
                checkSelection={(n: number) => checkSelection(n, filter.color)}
              />
              <FilterElement 
                title="Стиль" 
                filter={(n: number) => setFilter({...filter, style: handlePropertiesSelection(n, filter.style)})}
                properties={styles}
                state={filter}
                checkSelection={(n: number) => checkSelection(n, filter.style)}
              />
            </>
          }
        />
        <ItemsList
          content={
            <>
              {items.filter(
              (item) => {return item.categoryId.includes(props.categoryId)}
            )
            .filter(filter.material.includes(0) ? () => {return true} : (item) => {return item.materialId?.some(v => filter.material.includes(v))})
            .filter(filter.season > 0 ? (item) => {return item.seasonId == filter.season} : () => {return true})
            .filter(filter.color.includes(0) ? () => {return true} : (item) => {return item.colorId?.some(v => filter.color.includes(v))})
            .filter(filter.style.includes(0) ? () => {return true} : (item) => {return item.styleId?.some(v => filter.style.includes(v))})
            .map((item) => <div>{item.name}</div>)
            }
            </>
          }
        />     
      </div>
    </>
  )
}
