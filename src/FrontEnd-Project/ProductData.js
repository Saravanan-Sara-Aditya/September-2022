import React from "react";
import '../Css/AllFoods.css'
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../Redux/cartSlice";
function Child(props) {

    const { id, title, price,image} = props;
    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(cartActions.addItem({
            id,
            title,
            image,
            price
        }))
    }
    const history = useHistory();

    const addDesc = (id) => {
        history.push(`/food_details?id=${id}`)
    }
    return (
        <>
            <table>
                <tr>
                    <td>
                        <div className="dish_items_box">
                            <img src={props.image} onClick={() => addDesc(id)} />
                            <p className="desc">{props.title}
                            </p>
                            <p>Price:${props.price}</p>
                            <input type='submit' className="btn btn-danger" onClick={addToCart} value='Add to Cart' />
                        </div>

                    </td>
                </tr>
            </table>
        </>
    )
}
export default Child