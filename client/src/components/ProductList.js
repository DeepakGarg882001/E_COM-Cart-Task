import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {GetProducts} from "../redux/actions/productAction";
import "../Styles/productList.css";
import { BiRupee } from "react-icons/bi";
import { IoStar,IoStarHalf } from "react-icons/io5";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { getCartData } from "../redux/actions/cartAction";
const ProductList = () => {

  const data = useSelector((state) => state.ProductData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector( (state) => state.userReducer);
  const url = process.env.REACT_APP_SERVER_URL;
  useEffect(() => {
    dispatch(GetProducts());
  }, []);
  
  
  const addToCart = async(data)=>{
    if(user.length !==0){
      const makeReq = await fetch(`${url}/additem`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          user_id:user._id,
          product_id:data._id,
          image:data.image,
          name: data.name,
          org_price:data.org_price,
          discount:data.discount,
          shiping:data.shiping,
          extra_status:data.extra_status,
        })
      });

      const response = await makeReq.json();
      if(response.message){
        dispatch(getCartData(user._id))
      }else{
        Swal.fire("Process Failed, Try Again","","error");
      }

     
    }else{
      Swal.fire("Please Login first","");
      navigate("/login");
    }

  }
  


  return (
    <>
      <div className="products-canvas">
        {data.map((data,index) => {
          return (
           
              <div  key={index} className="product-card" >
                <div className="under-product-frame">
                  <div className="product-card-img-sec" >
                     <img src={data.image} className="product-card-img" alt="product_img"/>
                  </div>
                  <p className="product-name" >{data.name}</p>
                  <div className="product-price-sec">
                    <del className="org-price">{data.org_price}</del>
                    <p className="dis-price"><span><BiRupee /></span>{(data.org_price - (data.org_price*data.discount/100)).toFixed(0)}</p>
                    <p className="dis-off">{data.discount}% off</p>
                  </div>
                  <p className="shiping-cost"> {data.shiping} </p>
                  <div className="rating-sec">
                      <IoStar className="rating-true" />
                      <IoStar className="rating-true" />
                      <IoStar className="rating-true" />
                      <IoStarHalf className="rating-true" />
                      <IoStar />
                  </div>
                  <p className="extra-status">{data.extra_status} </p>

                  <div className="product-card-bottom">
                     <button className="product-card-btn" onClick={()=>addToCart(data) } > Add to Cart </button>
                  </div>
                </div>
              </div>
           
          );
        })}
      </div>
    </>
  );
};

export default ProductList;
