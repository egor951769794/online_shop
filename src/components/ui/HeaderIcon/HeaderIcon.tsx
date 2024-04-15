import { useState } from 'react';
import './HeaderIcon.css';


type HeaderIconProps = {
  src: string
  selected?: boolean;
  doHover?: boolean;
}

export default function HeaderIcon({src, selected = false, doHover = false}: HeaderIconProps) {

  const [hovered, setHovered] = useState(false);

  return (
    <>
      <div className='header-icon-container' onMouseEnter={() => setHovered(doHover)} onMouseLeave={() => setHovered(false)}>
        <button className='header-icon-button'>
          <img className={hovered? "header-icon-icon hovered" : "header-icon-icon"} src={src}></img>
        </button>
      </div>
    </>
  );
}
