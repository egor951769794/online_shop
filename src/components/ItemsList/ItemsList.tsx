import { useEffect, useState, useRef } from 'react';
import './ItemsList.css';


type ItemsListProps = {
  content: JSX.Element
  display: boolean
  header?: string | (string | undefined)[]
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
    <div className='items-list-container'>
      <div className='items-list-header'>{props.header}</div>
      <div className='items-list-list' ref={scrolledList} onScroll={handleScroll}>
        {props.content}
      </div>
    </div>
    </>
  )
  else return <></>
}
