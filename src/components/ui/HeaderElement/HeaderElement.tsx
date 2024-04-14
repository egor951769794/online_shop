import React, { MouseEventHandler } from 'react';
import './HeaderElement.css';

type HeaderElementProps = {
  text: string;
  handler: React.MouseEventHandler<HTMLButtonElement>;
  isBold?: boolean;
}

export default function HeaderElement(props: HeaderElementProps) {
  return (
    <>
      <div className='header-element-container'>
        <button className={props.isBold? 'header-element-button header-element-bold' : 'header-element-button'} onClick={props.handler}>{props.text}</button>
      </div>
    </>
  );
}
