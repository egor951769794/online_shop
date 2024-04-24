import { useState } from 'react';
import './FilterElement.css';
import { Property } from 'src/data/Properties';
import Link from '../Link/Link';

type FilterElementProps = {
  title: string,
  filter: (n: number) => void
  state: {
    category: number;
    material: number[];
    season: number;
    color: number[];
    style: number[];
  }
  properties: Property[]
  checkSelection: any
}

export default function FilterElement(props: FilterElementProps) {

  const [dropped, setDropped] = useState(false);

  return (
    <>
      <div className='filter-el-container'>
        <Link
          content={<div className='filter-el-text'>{props.title}</div>}
          handler={() => setDropped(!dropped)}
        />
        <div className={'filter-el-dropdown'.concat(dropped? ' visible' : '')}>
          {props.properties.map(
            (prop) => 
              <Link
                content={<div className={'filter-el-dropdown-option '.concat(props.checkSelection(prop.id)? ' selected' : '')} id={prop.id.toString()}>{prop.name}</div>}
                handler={() => props.filter(prop.id)}
              />
          )}
        </div>
      </div>
    </>
  )
}
