import { useRef, useState, } from 'react';

import './Items.css';
import { items } from 'src/data/ItemsData';

import ItemsFilter from '../ItemsFilter/ItemsFilter';
import ItemsList from '../ItemsList/ItemsList';

import FilterElement from '../ui/FilterElement/FilterElement';

import ItemListed from '../ItemListed/ItemListed';

import { colors, materials, seasons, sizes, shoeSizes, styles } from 'src/data/Properties';

import ItemInfo from '../ItemInfo/ItemInfo';
import { categories } from 'src/data/Categories';

type ItemsProps = {
  categoryId: number
}

export default function Items(props: ItemsProps) {

  // const [sortMethod, setSortMethod] = useState();
  const [whatToDisplay, setWhatToDisplay] = useState(-1);
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

  const header = categories.find((cat) => cat.categoryId === props.categoryId)?
  categories.find((cat) => cat.categoryId === props.categoryId)?.title :
  categories.map((cat) => cat.subCategories?.find((subcat) => subcat.categoryId === props.categoryId)?.title)

  return (
    <>
      <div className='items-wrapper' >
        <ItemsFilter
          display={whatToDisplay == -1}
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
          header={header}
          display={whatToDisplay == -1} 
          content={
            <>
              {items.filter(
              (item) => {return item.categoryId.includes(props.categoryId)}
            )
            .filter(filter.material.includes(0) ? () => {return true} : (item) => {return item.materialId?.some(v => filter.material.includes(v))})
            .filter(filter.season > 0 ? (item) => {return item.seasonId == filter.season} : () => {return true})
            .filter(filter.color.includes(0) ? () => {return true} : (item) => {return item.colorId?.some(v => filter.color.includes(v))})
            .filter(filter.style.includes(0) ? () => {return true} : (item) => {return item.styleId?.some(v => filter.style.includes(v))})
            .map((item) => <ItemListed goto={setWhatToDisplay} item={item}></ItemListed>)
            }
            </>
          }
        />
        <ItemInfo goBack={setWhatToDisplay} item={whatToDisplay != -1? items.find((item) => item.itemId == whatToDisplay) : undefined}></ItemInfo>
      </div>
    </>
  )
}
