import Product_Col from "../models/product.js";

export const getProducts = async (request,response)=>{
    console.log("getting all products")
    const allProducts= await Product_Col.find();
    console.log(allProducts);
    if(!allProducts){
        return response.status(400).json({error:"Process Failed"});
    }

    return response.status(200).json({data:allProducts});


}

export const searchProduct = async (request,response) =>{

    const query = request.query.key;

    const search = await Product_Col.find({
        "$or":[
            {"name":{$regex:query,$options:"i"}},
            {"color":{$regex:query,$options:"i"}},
            {"category":{$regex:query,$options:"i"}},
        ]
    });

    if(!search){
        return response.status(400).json({error:"Process Failed"});
    }

    return response.status(200).json({data:search});


}

