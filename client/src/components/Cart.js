import React,{useEffect} from 'react'
import { useSelector ,useDispatch} from "react-redux";
import { BiRupee } from "react-icons/bi";
import { IoStar,IoStarHalf } from "react-icons/io5";
import "../Styles/cart.css";
import { getCartData } from '../redux/actions/cartAction';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
   
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state)=>state.CartData);
  const user = useSelector((state)=> state.userReducer);
  const url = process.env.REACT_APP_SERVER_URL;

  let amount = data.length && data.map((item)=> item.org_price).reduce((prev,next)=> prev+next);
  
  let disc = data.length && data.map((item)=> (item.org_price*item.discount)/100).reduce((prev,next)=> prev+next);
  
  let discount = disc.toFixed(0);

  const removeAllItem  = async()=>{
    const makeReq = await fetch(`${url}/clearCart`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        user_id:user._id
      })
    });

    const response = await makeReq.json();
    if(response.message){
      dispatch(getCartData(user._id));
    }
    else{
      Swal.fire("Process Failed,Try Again");
    }

  }

  const removeOneItem = async(id)=>{
    
    const makeReq = await fetch(`${url}/removeItem`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        _id:id
      })
    });

    const response = await makeReq.json();
    if(response.message){
      dispatch(getCartData(user._id));
    }
    else{
      Swal.fire("Process Failed,Try Again");
    }

  }
 
  useEffect(()=>{
    if(user.length !==0){
      dispatch(getCartData(user._id));
    }else{
      Swal.fire("Please Login");
      navigate("/login");
    }
   },[]);
  
  return (
    <>
        
       <div className='cart-canvas'> 
          
          <div className='cart-canvas-top'> 
            <button  className='cart-empty-btn' onClick={()=>removeAllItem()} > Clear Cart </button>
          </div>

         <div className='cart-products-canvas' >
              
         {data.map((data,index) => {
          return (
           
              <div  key={index} className="cart-product-card" >
                <div className="under-cart-product-frame">
                  <img src={data.image} className="cart-product-card-img" alt='product_img'/>
                  <p className="cart-product-name" >{data.name}</p>
                  <div className="cart-product-price-sec">
                    <del className="cart-org-price">{data.org_price}</del>
                    <p className="cart-dis-price"><span><BiRupee /></span>{(data.org_price - (data.org_price*data.discount/100)).toFixed(0)}</p>
                    <p className="cart-dis-off">{data.discount}% off</p>
                  </div>
                  <p className="cart-shiping-cost"> {data.shiping} </p>
                  <div className="cart-rating-sec">
                      <IoStar className="cart-rating-true" />
                      <IoStar className="cart-rating-true" />
                      <IoStar className="cart-rating-true" />
                      <IoStarHalf className="cart-rating-true" />
                      <IoStar />
                  </div>
                  <p className="cart-extra-status">{data.extra_status} </p>

                  <div className="cart-product-card-bottom">
                     <button className="cart-product-card-btn"  > Buy Now </button>
                     <button className="cart-product-card-btn" onClick={()=>removeOneItem(data._id)} > Remove Item </button>

                  </div>
                </div>
              </div>
           
            );
          })}

         </div>

         <div>
             <h2> Amount : {amount}</h2>
             <h2> Discount : {discount}</h2>
             <h2> Final Amount : {amount-discount}</h2>
         </div>
       </div>
      
    </>
  )
}

export default Cart;