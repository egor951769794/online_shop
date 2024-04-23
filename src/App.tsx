import './App.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Home from './pages/Home/Home';
import ItemsPage from './pages/ItemsPage/ItemsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/items" Component={ItemsPage}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
