import {takeEvery,put} from "redux-saga/effects";
import { GET_Products, Set_Getting_Products, Search_Products , SET_CART_DATA ,GET_CART_DATA} from "./reduxConstants";


const url = process.env.REACT_APP_SERVER_URL;


function* getCart(action){
  const makeRequest = yield fetch(`${url}/getCart?key=${action.data}`, {
      method: "GET",
      headers: {
        Accept:"application/json",
      "Content-Type": "application/json",
    },
    credentials:"include",
    });
    
    const response = yield makeRequest.json();
    let data ;
    if(response.data){
      data = response.data;
    }
    if(response.error){
      data = response;
    }
 
  yield put( {type:SET_CART_DATA,data:data});

}


function* getProducts(){
    const makeRequest = yield fetch(`${url}/products`, {
        method: "GET",
        headers: {
          Accept:"application/json",
        "Content-Type": "application/json",
      },
      credentials:"include",
      });
      
      const response = yield makeRequest.json();
      let data ;
      if(response.data){
        data = response.data;
      }
      if(response.error){
        data = response;
      }
   
    yield put( {type:Set_Getting_Products,data:data});

}



function* searchProducts(action){
    
    const query = action.query;

    const makeRequest = yield fetch(`${url}/searchproducts?key=${query}`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    })

    const response = yield makeRequest.json();
      let data ;
      if(response.data){
        data = response.data;
      }
      if(response.error){
        data = response;
      }
   
    yield put( {type:Set_Getting_Products,data:data});

}





function* saga() {
 
    yield takeEvery(GET_Products , getProducts);
    
    yield takeEvery(Search_Products , searchProducts);
    yield takeEvery(GET_CART_DATA , getCart);
    
}

export default saga;