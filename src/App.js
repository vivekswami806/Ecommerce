
import './App.css';
import Header from './component/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Footer from './component/Footer';
import SinglePage from './component/SinglePage';
import ProductList from './component/ProductList';
import Cart from './component/Cart';

function App() {
  return (
   <>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path ='/cart' element={<Cart/>}></Route>
    <Route path= "/singlepage/:id" element={<SinglePage/>}/>
    <Route path='/product' element={<ProductList/>}/>   
   </Routes>
   <Footer/>
   </>
  );
}

export default App;
