import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './Components/Products';
import Category from './Components/Category';
import NavBar from './Components/NavBar';

function App() {
  return (
    <BrowserRouter>

    <NavBar/>  
      <Routes>
        <Route path='/products' element = {<Products/>}/>
        <Route path='/category' element = {<Category/>}/>
    </Routes>
      
    </BrowserRouter>
  );
}

export default App;
