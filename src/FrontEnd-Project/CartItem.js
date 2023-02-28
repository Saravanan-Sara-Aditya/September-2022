import { ListGroupItem } from "reactstrap";
import React from "react";
import '../Css/cart-item.css'
import { useDispatch } from "react-redux";
import { cartActions } from "../Redux/cartSlice";

const CartItem = ({ item }) => {

    const { id, title, price, image, quantity, totalPrice } = item
    const dispatch = useDispatch()
    const incrementItem = () => {
        dispatch(cartActions.addItem({
            id,
            image,
            title,
            price,
        }))
    }
    const decreasetItem = () => {
        dispatch(cartActions.removeItem(id))
    }

    const deletetItem = () => {
        dispatch(cartActions.deleteItem(id))
    }

    return <ListGroupItem className="border-0 cart_item">
        <div className="cart_item-info d-flex gap-2">
            <img src={image} alt='ct' />
            <div className="cart_product-info w-100 d-flex align-items-center gap-4 justify-content-between">
                <div>
                    <h6 className="cart_product-title">{title}</h6>
                    <p className="cart_product-price d-flex align-items-center gap-5">{quantity}x<span>${totalPrice}</span></p>
                    <div className="d-flex align-items-center gap-3 increase_decrease-btns">
                        <span className="increase-btn" onClick={incrementItem}><i className="ri-add-line"></i></span>
                        <span>{quantity}</span>
                        <span className="decrease-btn" onClick={decreasetItem}><i className="ri-subtract-line"></i></span>
                    </div>
                </div>
                <span className="delete-btn" onClick={deletetItem}><i className="ri-close-line"></i></span>
            </div>
        </div>
    </ListGroupItem>
}
export default CartItem