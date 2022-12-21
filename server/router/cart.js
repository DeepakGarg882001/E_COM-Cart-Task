import Cart_Col from "../models/cart.js"

export const getCart = async(request,response) =>{
     
    const user_id = request.query.key;

    const fetchData = await Cart_Col.find({user_id});

    return response.status(200).json({message:"got data",data:fetchData});

}

export const addToCart = async(request,response) =>{

    const {user_id,product_id, image, name, org_price, discount, shiping, extra_status} = request.body;
    
    if(!user_id | !product_id | !image | !name | !org_price | !discount | !shiping | !extra_status){
        return response.status(400).json({error:"Process failed"});
    }

    const addItem = await Cart_Col.create(request.body);
    if(!addItem){
        return response.status(400).json({error:"Process failed"});
    }
    
    return response.status(200).json({message:"item added"});
}

export const removeFromCart = async(request,response) =>{
    const {_id} = request.body;

    if(!_id){
        return response.status(400).json({error:"Process Failed"});
    }

    const removeItem = await Cart_Col.findByIdAndDelete(_id);
    if(!removeItem){
        return response.status(400).json({error:"Process Failed"});
    }

    return response.status(200).json({message:"item removed"});

}

export const clearCart = async(request,response) =>{
    const {user_id} = request.body;
    if(!user_id){
        return response.status(400).json({error:"Process Failed"});
    }
    const clear = await Cart_Col.deleteMany({user_id});
    if(!clear){
        return response.status(400).json({error:"Process Failed"});
    }

    return response.status(200).json({message:"cart clear"});
}