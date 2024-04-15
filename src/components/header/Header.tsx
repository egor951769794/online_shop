import React from 'react';
import logo from './logo.svg';
import './Header.css';
import HeaderElement from '../ui/HeaderElement/HeaderElement';
import HeaderIcon from '../ui/HeaderIcon/HeaderIcon';
import search from 'src/assets/icons/search.svg'
import user from 'src/assets/icons/user.svg'
import city from 'src/assets/icons/city.svg'
import Link from '../ui/Link/Link';


export default function Header() {
  return (
    <div className="header">
      <div className='header-container'>
        <div className='header-container-third'>
          <Link handler={() => alert(24432532)}
            content={<>
            <HeaderIcon src={city} doHover={true}></HeaderIcon>
            <HeaderElement text="Съеаауа" doHover={true}></HeaderElement>
            </>}
          />
        </div>
        
        <div className='header-container-third'>
          <HeaderElement text='МАГАЗ' isBold={true}></HeaderElement>
        </div>
        <div className='header-container-third'>
          <Link 
            handler={() => alert('search')}
            content={<div><HeaderIcon src={search} doHover={true}></HeaderIcon></div>}
          />
          <Link 
            handler={() => alert('user')} 
            content={<div><HeaderIcon src={user} doHover={true}></HeaderIcon></div>}
          />
        </div>
      </div>
    </div>
  );
}
