import { GET_Products,Search_Products } from "../reduxConstants";


 export const GetProducts =()=>{

   return({
     type:GET_Products
   });

}


 

export const SearchProductAction = (query) =>{

   
  return({
    type:Search_Products,
    query

  });

}
