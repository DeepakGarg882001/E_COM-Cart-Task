import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home";
import Cart from "./components/Cart";
import Header from './components/Header';
import Login from './components/Login';
import SignUp from './components/Signup';


const Routers = () => {
  return (
    <>
     <Header />
      <Routes>
         <Route  path="/" element={<Home />}  />
         <Route  path="/cart" element={<Cart />}  />
         <Route  path="/login" element={<Login />}  />
         <Route  path="/signup" element={<SignUp />}  />
      </Routes>
    </>
  )
}

export default Routers;