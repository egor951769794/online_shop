import { useState, useEffect } from 'react';

import './Header.css';
import HeaderElement from '../ui/HeaderElement/HeaderElement';
import HeaderIcon from '../ui/HeaderIcon/HeaderIcon';
import search from 'src/assets/icons/search.svg'
import user from 'src/assets/icons/user.svg'
import city from 'src/assets/icons/city.svg'
import Link from '../ui/Link/Link';

import { useOutsideClick } from 'src/hooks/UseClickOutside';

import Catalog from '../Catalog/Catalog';

import { useNavigate } from 'react-router-dom';


export default function Header() {

  const navigate = useNavigate()

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
    if (scrollPosition > 150) setDisplayCatalog(false)
  };

  const ref = useOutsideClick(() => setDisplayCatalog(false));

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [displayCatalog, setDisplayCatalog] = useState(false);

  const headerClassName = "header".concat(scrollPosition > 150? ' hidden' : ' visible')
  const catalogClassName = "cats-container".concat(!displayCatalog? ' hidden' : ' visible')

  return (
    <div ref={ref} className={headerClassName}>
      <div className='header-container'>
        <div className='header-container-third'>
          <Link handler={() => alert(scrollPosition)}
            content={<>
            <HeaderIcon src={city} size={"small"} doHover={true}></HeaderIcon>
            <HeaderElement text="Город доставки..." doHover={true} size={"small"}></HeaderElement>
            </>}
          />
        </div>
        <div className='header-container-third'>
        <Link 
          content={<HeaderElement text='МАГАЗ' isBold={true} size={"big"} doHover={true}></HeaderElement>}
          handler={() => {navigate("/"); setDisplayCatalog(false)}}
        />
        </div>
        <div className='header-container-third'>
          <Link 
            handler={() => setDisplayCatalog(!displayCatalog)}
            content={<div><HeaderIcon src={search} doHover={true}></HeaderIcon></div>}
          />
          <Link 
            handler={() => alert(displayCatalog)} 
            content={<div><HeaderIcon src={user} doHover={true}></HeaderIcon></div>}
          />
        </div>
      </div>
      <Catalog display={displayCatalog} changeDisplay={setDisplayCatalog} class={catalogClassName}></Catalog>
    </div>
  );
}
