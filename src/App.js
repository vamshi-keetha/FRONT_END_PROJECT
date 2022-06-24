import { keyboardImplementationWrapper } from '@testing-library/user-event/dist/keyboard';
import {Route,Routes,NavLink,Navigate} from 'react-router-dom';
import Bestsellers from './components/Bestsellers';
import Books from './components/Books';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Customerservice from './components/Customerservice'; 
import Electronics from './components/Electronics';
import Fashion from './components/Fashion';
import Home from './components/Home';
import Account from './components/Account';
import { useState } from 'react';
 import Addtodo from './components/Addtodo'
import Todolist from './components/Todolist'
import Todocount from './components/Todocount';
import Stack from './components/Stack';
import React from 'react';
import Products from './components/Products';


function App() {


  let [todolist,setTodolist]=useState([])



  return (
    <div>
      {/* navbars */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">
     <img src='https://bgr.com/wp-content/uploads/2020/08/Amazon-Sign.jpg?quality=82&strip=all&w=1440&h=810&crop=1' alt=''className='logo'></img>
    </NavLink>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav nav-pills bg-dark p-2 me-auto mb-2 mb-lg-0">
        {/* link for home */}
        <li className="nav-item satv ">
          <NavLink className="nav-link satv"  to="">
            <img src='data:image/png;base64,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' alt='' className='hom'></img>
          </NavLink>
          </li>
          {/* link for fashion  */}
          <li className="nav-item satv">
          <NavLink className="nav-link"  to="Fashion">Fashion</NavLink>
          </li>
           {/* link for books */}
           <li className="nav-item satv">
          <NavLink className="nav-link"  to="Books">Books</NavLink>
          </li>
          {/* link for customerservice */}
          <li className="nav-item satv">
          <NavLink className="nav-link"  to="Customerservice">Customerservice</NavLink>
          </li>
          {/* link for electronics */}
          <li className="nav-item satv">
          <NavLink className="nav-link"  to="Electronics">Electronics</NavLink>
          </li>
       
       
               {/* link for mobiles */}
               <li className="nav-item satv">
          <NavLink className="nav-link"  to="account">Account</NavLink>
          </li>
 {/* link for products */}
          <li className="nav-item satv ">
          <NavLink className="nav-link"  to="Bestsellers">Products</NavLink>
          </li>
        
          <li className="nav-item satv">
          <NavLink className="nav-link"  to="Stack">Stack</NavLink>
          </li>
          


          <Addtodo setTodolist={setTodolist} todolist={todolist} />
              
           {/* <form className="d-flex br-3">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>   */}
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src='https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png' alt='' className='lang'></img>
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink className="dropdown-item text-dark bg-light" to="#">Telugu</NavLink></li>
            <li><NavLink className="dropdown-item text-dark bg-light" to="#">Hindi</NavLink></li>
            <li><NavLink className="dropdown-item text-dark bg-light" to="#">English</NavLink></li>
            <li><NavLink className="dropdown-item text-dark bg-light" to="#">Bengali</NavLink></li>
            <li><NavLink className="dropdown-item text-dark bg-light" to="#">Marati</NavLink></li>
            <li><NavLink className="dropdown-item text-dark bg-light" to="#">Tamil</NavLink></li>
          </ul>
        </li>  
       </ul>
    </div>
  </div>
</nav>



      {/* create routes for components */}
      <Routes>
         {/* create route for home page */}
         <Route path='' element={<Home />} />
        {/* create route for bestsellers component */}
        <Route path='Bestsellers' element={<Products />}  /> 
         {/* create route for books component */}
      <Route path='Books' element={<Books />} />
          {/* create route for customerservices component */}
          <Route path='Customerservice' element={<Customerservice />} />
           {/* create route for electronics component */}
           <Route path='Electronics' element={<Electronics />} />
            {/* create route for fashion component */}
            <Route path='Fashion' element={<Fashion />} />
             {/* create route for mobiles component */}
             <Route path='account' element={<Account />} />
             <Route path='Stack' element={<Stack />} />
               
      </Routes>
     
    
    </div>

  );
}

export default App;
 