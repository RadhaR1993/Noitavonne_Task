import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Suspense, lazy } from 'react';
import Detail from './Components/Detail';
import Checkout from './Components/Checkout';
import RegistrationForm from './Components/RegistrationForm';
import OrderComplete from './Components/Ordercomplete';
import Products from './Components/Products';
import Dashboard from './Components/Administrator/Dashboard'
import AddProduct from './Components/Administrator/Addproduct';
import Productlist from './Components/Productlist';
import Adminlogin from './Components/Administrator/Adminlogin';
// const Products = lazy(() => import('./Components/Products'));





function App() {

  return (
    <div>

      <BrowserRouter>
       

        <Routes>
          <Route path='/' element={<Home />}></Route>
     
          {/* <Suspense fallback={<div>"Loading....."</div>}> */}
          <Route path='/products' element={<Products />}></Route>
          {/* </Suspense> */}
          <Route path='/cart' element={<Cart />}></Route>
         
        
          <Route path='/detail' element={<Detail />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/registrationform' element={<RegistrationForm />} />
          <Route path='/ordercomplete' element={<OrderComplete />} />

          <Route >
            <Route path='/admin'element={<Dashboard/>}/>
            <Route path='/addproduct'element={<AddProduct/>}/>
            <Route path='/addproduct/:id'element={<AddProduct/>}/>
            <Route path='/productlist'element={<Productlist/>}/>
            <Route path='/adminlogin'element={<Adminlogin/>}/>
          </Route>

        </Routes>
    
       
      </BrowserRouter>

    </div >
  );
}

export default App;
