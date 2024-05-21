import { useLocation } from 'react-router-dom';
import Items from 'src/components/Items/Items';
import Header from 'src/components/header/Header';

export default function ItemsPage() {

  const location = useLocation()

  return (
    <>
      <Header></Header>
      <Items categoryId={location.state.catId}></Items>
    </>
  );
}
