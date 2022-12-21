import React from 'react'
import "../Styles/Header.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useSelector, useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import {SearchProductAction} from '../redux/actions/productAction';

const Header = () => {

  const data= useSelector((state)=>state.CartData);
  const dispatch = useDispatch();


  return (
    <>
         <div className='header-canvas'>
            
             <div className='header-company' >
                <Link to="/" style={{textDecoration:"none",color:'transparent'}}>
                     <h1 className='header-company-name' > Company </h1> 
                </Link>
             </div>

             <div className='search-sec' > 
                 <input placeholder=' Search ....' onChange={(e)=>dispatch(SearchProductAction(e.target.value))}  className="search-input"/>
             </div>

             <div className='header-icons' > 
                  
                   <div>
                     <Link to="/cart" className='header-cart-icon' >
                        <ShoppingCartIcon style={{fontSize:"1.5rem"}}/>
                        <h4 className='header-cart-count' >{data.length}</h4>
                     </Link>
                   </div>
                   <div>
                      <Link to="/login">
                        <p>Login</p>
                      </Link>
                   </div>
                   <div>
                      <Link to="/signup">
                        <p>SignUp</p>
                      </Link>
                   </div>
              </div>
             
         </div>

    </>
  )
}

export default Header;