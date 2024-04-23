import { useLocation } from 'react-router-dom';
import Items from 'src/components/Items/Items';

export default function ItemsPage() {

  const location = useLocation()

  return (
    <div className='app'>
      <Items categoryId={location.state.catId}></Items>
    </div>
  );
}
