import { useState } from 'react';
import './HeaderElement.css';

type HeaderElementProps = {
  text: string;
  isBold?: boolean;
  doHover?: boolean;
  size?: string;
}

export default function HeaderElement({text, isBold = false, doHover = false, size='default'}: HeaderElementProps ) {

  const [hovered, setHovered] = useState(false);
  const buttonClassName = 'header-element-button'.concat(isBold? ' header-element-bold' : '', hovered? ' hovered' : '', ' ', size);

  return (
    <>
      <div className='header-element-container'  onMouseEnter={() => setHovered(doHover)} onMouseLeave={() => setHovered(false)}>
        <button className={buttonClassName}>{text}</button>
      </div>
    </>
  );
}
