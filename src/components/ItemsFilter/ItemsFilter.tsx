import './ItemsFilter.css';

type ItemsFilterProps = {
  content: JSX.Element
}

export default function ItemsFilter(props: ItemsFilterProps) {



  return (
    <>
      <div className='items-filter-container'>{props.content}</div>
    </>
  )
}
