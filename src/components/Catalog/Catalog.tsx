import { useState, useEffect } from 'react';

import './Catalog.css';
import Link from '../ui/Link/Link';

import { categories as cats } from 'src/data/Categories'; 

type CatalogProps = {
  display: boolean
  changeDisplay: React.Dispatch<React.SetStateAction<boolean>>;
  class: string
}

export default function Catalog(props: CatalogProps) {

  return (
    <>
      <div className={props.class}>{cats.map((cat) => (<div className='cats-category'>{cat.title}</div>))}</div>
    </>
  )
}
