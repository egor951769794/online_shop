import { useState, useEffect } from 'react';

import './Header.css';
import HeaderElement from '../ui/HeaderElement/HeaderElement';
import HeaderIcon from '../ui/HeaderIcon/HeaderIcon';
import search from 'src/assets/icons/search.svg'
import user from 'src/assets/icons/user.svg'
import city from 'src/assets/icons/city.svg'
import Link from '../ui/Link/Link';


export default function Header() {

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleHeaderAppearance = () => {
    
  }

  const headerClassName = "header".concat(scrollPosition > 150? ' hidden' : ' visible')

  return (
    <div className={headerClassName}>
      <div className='header-container'>
        <div className='header-container-third'>
          <Link handler={() => alert(scrollPosition)}
            content={<>
            <HeaderIcon src={city} size={"small"}></HeaderIcon>
            <HeaderElement text="Город доставки..." doHover={true} size={"small"}></HeaderElement>
            </>}
          />
        </div>
        
        <div className='header-container-third'>
          <HeaderElement text='МАГАЗ' isBold={true} size={"big"}></HeaderElement>
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
