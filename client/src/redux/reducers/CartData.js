
import { SET_CART_DATA} from "../reduxConstants";

const CartData = (data = [], action) => {

  switch (action.type) {

    case SET_CART_DATA: data = action.data;
                       return data;

    default:
                       return data;
  }
};

export default CartData;
