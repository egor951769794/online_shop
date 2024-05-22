import Header from 'src/components/header/Header';
import MainImage from 'src/components/MainImage/MainImage';
import { useContext } from 'react';
import AuthContext from 'src/utils/AuthProvider/AuthProvider';

export default function Home() {
  const auth = useContext(AuthContext)

  return (
    <div className='app'>
      <MainImage></MainImage>
      <Header></Header>
    </div>
  );
}
