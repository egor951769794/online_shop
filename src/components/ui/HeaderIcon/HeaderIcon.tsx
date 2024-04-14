import { useState } from 'react';
import './HeaderIcon.css';


type HeaderIconProps = {
  src: string
  handler?: React.MouseEventHandler<HTMLButtonElement>;
  selected?: boolean;
}

export default function HeaderIcon(props: HeaderIconProps) {

  const [hovered, setHovered] = useState(false);

  return (
    <>
      <label className='header-icon-container' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <button className='header-icon-button' onClick={props.handler}>
          <img className={hovered? "header-icon-icon hovered" : "header-icon-icon"} src={props.src}></img>
        </button>
      </label>
    </>
  );
}
