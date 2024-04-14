import React from 'react';
import logo from './logo.svg';
import './Header.css';
import HeaderElement from '../ui/HeaderElement/HeaderElement';
import HeaderIcons from '../HeaderIcons/HeaderIcons';


export default function Header() {
  return (
    <div className="header">
      <div className='header-container'>
        <div className='header-container-third'>
          <HeaderElement text="Съешь еще этиъ аауа" handler={() => alert(1)}></HeaderElement>
        </div>
        <div className='header-container-third'>
          <HeaderElement text='МАГАЗ' handler={() => {}} isBold={true}></HeaderElement>
        </div>
        <div className='header-container-third'>
          <HeaderIcons/>
        </div>
      </div>
    </div>
  );
}
