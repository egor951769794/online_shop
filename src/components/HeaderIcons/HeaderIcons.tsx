import './HeaderIcons.css';
import HeaderIcon from '../ui/HeaderIcon/HeaderIcon';
import search from 'src/assets/icons/search.svg'
import user from 'src/assets/icons/user.svg'


export default function HeaderIcons() {
  return (
    <>
      <div className='header-icons-container'>
        <HeaderIcon src={search} handler={() => alert(2)}></HeaderIcon>
        <HeaderIcon src={user} handler={() => alert(3)}></HeaderIcon>
      </div>
    </>
  );
}
