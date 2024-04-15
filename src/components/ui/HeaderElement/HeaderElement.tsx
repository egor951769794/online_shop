import React, { useState } from 'react';
import './HeaderElement.css';

type HeaderElementProps = {
  text: string;
  isBold?: boolean;
  doHover?: boolean;
}

export default function HeaderElement({text, isBold = false, doHover = false}: HeaderElementProps ) {

  const [hovered, setHovered] = useState(false);
  let buttonClassName = 'header-element-button'.concat(isBold? ' header-element-bold' : '', hovered? ' hovered' : '');

  return (
    <>
      <div className='header-element-container'  onMouseEnter={() => setHovered(doHover)} onMouseLeave={() => setHovered(false)}>
        <button className={buttonClassName}>{text}</button>
      </div>
    </>
  );
}
