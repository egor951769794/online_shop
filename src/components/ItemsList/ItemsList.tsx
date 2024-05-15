import { useEffect, useState, useRef } from 'react';
import './ItemsList.css';


type ItemsListProps = {
  content: JSX.Element
  display: boolean
}

export default function ItemsList(props: ItemsListProps) {

  const scrolledList = useRef(null)
  const [listScroll, setListScroll] = useState(0);

  const handleScroll = () => {
    if(scrolledList.current) {
      const {scrollTop} = scrolledList.current
      setListScroll(scrollTop)
    }
  }

  useEffect(() => {
    document.querySelector('.items-list-container')?.scrollTo(0, listScroll)
  }, [props.display])

  if (props.display) return (
    <>
      <div className='items-list-container' ref={scrolledList} onScroll={handleScroll}>
        {props.content}
      </div>
    </>
  )
  else return <></>
}
