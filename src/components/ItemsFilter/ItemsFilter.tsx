import './ItemsFilter.css';

type ItemsFilterProps = {
  content: JSX.Element
  display: boolean
}

export default function ItemsFilter(props: ItemsFilterProps) {
  
  if (props.display) return (
    <>
      <div className='items-filter-container'>{props.content}</div>
    </>
  )
  else return <></>
}
