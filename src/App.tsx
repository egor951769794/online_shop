import './App.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Home from './pages/Home/Home';
import ItemsPage from './pages/ItemsPage/ItemsPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Cabinet from './components/Cabinet/Cabinet';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/items" Component={ItemsPage}></Route>
        <Route path="/login" Component={LoginPage}></Route>
        <Route path="/cabinet" Component={Cabinet}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
