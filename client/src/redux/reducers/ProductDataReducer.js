import {Set_Getting_Products} from "../reduxConstants";

const ProductData =(data=[],action)=>{

   switch(action.type){
    case Set_Getting_Products: 
             data = action.data;
             return data;   

    default: return data;
   }

}

export default ProductData;