import mongoose from "mongoose";

const Product_Doc = new mongoose.Schema({
    category:{
        type:String
    },
            name:{
                type:String
            },
            image:{
                type:String
            },
            color:{
                type:String
            },
            org_price: {
                type:Number
            },
            dis_price:{
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
            }

});


const Product_Col = mongoose.model("PRODUCT",Product_Doc);
export default Product_Col;

