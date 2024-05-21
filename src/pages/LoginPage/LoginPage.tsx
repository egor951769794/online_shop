import { useLocation } from 'react-router-dom';
import Login from 'src/components/Login/Login';
import Header from 'src/components/header/Header';

export default function LoginPage() {

  // const location = useLocation()

  return (
    <>
      <Header></Header>
      <Login></Login>
    </>
  );
}
