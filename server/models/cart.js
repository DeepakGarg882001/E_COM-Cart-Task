import mongoose from "mongoose";

const Cart_Doc = new mongoose.Schema({

          user_id:{
            type:String
          },
          product_id:{
            type:String
          },
          image:{
            type:String
          },
          name:{
            type:String
          },
          org_price:{
            type:Number
          },
          discount:{
            type:Number
          },
          shiping:{
            type:String
          },
          extra_status:{
            type:String
          },

});


const Cart_Col = mongoose.model("CART",Cart_Doc);
export default Cart_Col;

