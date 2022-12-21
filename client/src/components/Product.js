import React, { useState } from 'react'



const Product = () => {
    

    const [productData, setProductData]=useState({
            productName:"Dell Laptop",
            productImage:"",
            quantity:"1"
    });

    

  return (
    <>
        <h1>This is the Product</h1>
        <div>
            <h3>quantity : {productData.quantity} </h3>
            
        </div>
       
    </>
  )
}

export default Product;