import React,{useEffect} from "react";
import ProductList from "./ProductList";
import "../Styles/home.css";
import { useDispatch, useSelector } from "react-redux";
import { GetProducts } from "../redux/actions/productAction";
import { getCartData } from "../redux/actions/cartAction";
const Home = () => {

 const dispatch = useDispatch();
 const user = useSelector((state)=> state.userReducer);

 useEffect(()=>{
  dispatch(GetProducts());
  if(user.length !==0){
    dispatch(getCartData(user._id));
  }
 },[]);
  return (
    <>
      <div className="home-canvas">
           <ProductList />
      </div>
    </>
  );
};

export default Home;
