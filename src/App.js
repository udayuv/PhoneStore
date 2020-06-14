import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import NavBar from './Component/NavBar';
import Dashboard from './Component/Dashboard';
import Home from './Component/Home';
import Category from './Component/category';
import Cart from './Component/cart';
import ProductList from './Component/productList';
import ProductDetails from './Component/productDetails';
import Login from './Component/login';
import SignUp from './Component/signUp';
import './sass/main.scss';
import Modal from './Component/common/modal';
import DefaultPage from './Component/default';

function App() {
  return (
    <div className="App">
      {/**header */}
      <div className="row card-header">
        <div className="col-12"><NavBar/></div>
      </div>

      {/**main content */}
      <div className="row card-header">
        <div className="col-12">
            <Switch>
              <Route path='/category' component={Category}/>
              <Route path='/home' component={Home}/>
              <Route path='/product' component={ProductList}/>
              <Route path='/cart' component={Cart}/>
              <Route path='/login' component={Login}/>
              <Route path='/register' component={SignUp}/>
              <Route path='/prddetails' component={ProductDetails}/>
              <Route exact path='/' component={Dashboard}/>
              <Route  component={DefaultPage}/>
            </Switch>
            <Modal/>
            </div>
      </div>

      {/** footer */}
      <div className="row card-header text-center">
        @copyright kisanmandi 2020-2021
      </div>
    </div>
  );
}

export default App;
