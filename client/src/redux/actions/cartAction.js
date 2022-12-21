import { Add_To_Cart,Clear_Cart ,Remove_From_Cart,GET_CART_DATA} from "../reduxConstants";

export const getCartData = (data)=>{
    return({
        type:GET_CART_DATA,
        data
    })
}
    
export const AddToCart=(data)=>{

    return({
        type : Add_To_Cart,
        data
    });
}



export const EmptyCart = ()=>{
     
    return ({
        type:Clear_Cart,
        
    });
}




export const RemoveFromCart =(data)=>{
   

   return ({
    type:Remove_From_Cart,
    data
   });

}
