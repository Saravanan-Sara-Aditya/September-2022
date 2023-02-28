import React from "react";
import { Container, Row, Col } from "reactstrap";
import '../Css/data.css'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartUiActions } from "../Redux/cartUiSlice";
function Header() {
    const totalQuantity = useSelector(state => state.cart.totalQuantity)
    const dispatch = useDispatch()
    const togglecart = () => {
        dispatch(cartUiActions.toggle())
    }
    return (
        <header>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4gimTU7gnWOfu7ze3Tfhy8J_OGB6QlrHvEwE51wroNvp3v01nxUml6U1ssCRo-Cx5RCc&usqp=CAU"
                alt="header_logo"
                className="logo"
            />

            <Container className="d-flex justify-content-center">
                <Row>
                    <Col>
                        <Link to='/home'><button className="menu_btn">Home</button></Link>
                    </Col>
                    <Col>
                        <Link to='/all_foods'><button className="menu_btn">All Foods</button></Link>
                    </Col>
                    <Col>
                        <Link to='/login_page'><button className="menu_btn">Logout</button></Link>
                    </Col>
                </Row>
            </Container>
            <div className="shoppingCart">
                <span className='cart' onClick={togglecart}>
                    <i class="ri-shopping-cart-2-fill"></i>
                </span>
                <span class="badge badge-danger">{totalQuantity}</span>
            </div>
        </header>
    );
}

export default Header