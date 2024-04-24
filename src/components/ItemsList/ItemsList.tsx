import './ItemsList.css';

type ItemsListProps = {
  content: JSX.Element
}

export default function ItemsList(props: ItemsListProps) {



  return (
    <>
      <div className='items-list-container'>
        {props.content}
      </div>
    </>
  )
}
