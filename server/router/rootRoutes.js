import express from "express";
const router=express.Router();

import login from "./login.js";
import signup from "./signup.js";
import { removeFromCart ,getCart,addToCart,clearCart} from "./cart.js";
import { getProducts ,searchProduct} from "./product.js";

//    ======= Authentication Routes =========  //

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/products").get(getProducts);
router.route("/getCart").get(getCart);
router.route("/addItem").post(addToCart);
router.route("/removeItem").post(removeFromCart);
router.route("/clearCart").post(clearCart);
router.route("/searchproducts").get(searchProduct);

export default router;
