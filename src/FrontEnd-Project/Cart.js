import React from "react";
import { ListGroup } from "reactstrap";
import CartItem from "../FrontEnd-Project/CartItem";
import '../Css/shopping-cart.css'
import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "../Redux/cartUiSlice";
import { totalAmount } from "../Redux/cartSlice";
const Cart = () => {
    const dispatch = useDispatch()
    const cartProducts = useSelector(state => state.cart.cartItems)
    const Subtotal = useSelector(totalAmount)
    const toggleCart = () => {
        dispatch(cartUiActions.toggle());
    }
    return <div className=".cart_container">
        <ListGroup className="cart">
            <div className="cart_close">
                <span onClick={toggleCart}><i className="ri-close-fill"></i></span>
            </div>

            <div className="cart_item-list">

                {
                    cartProducts.length === 0 ?
                        <h6 className="text-center mt-5 text-danger">Your Cart is Empty</h6> : cartProducts.map((item, index) => (
                            <CartItem item={item} key={index} />
                        ))
                }
            </div>
            <div className="cart_bottom">
                <h6>Subtotal Amount:<span>${Subtotal}</span></h6>
            </div>
        </ListGroup>
    </div>
}
export default Cart