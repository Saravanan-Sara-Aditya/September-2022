import React, { useRef, useEffect } from "react";
import { Container } from "reactstrap";
import logo from '../../assets/images/res-logo.png'
import { Link } from "react-router-dom";

import '../../styles/header.css'
import { useSelector, useDispatch } from "react-redux";

import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

const nav_link = [
    {
        display: 'Home',
        path: '/home'
    },
    {
        display: 'Foods',
        path: '/foods'
    },
    {
        display: 'Cart',
        path: '/cart'
    },
    {
        display: 'Contact',
        path: '/contact'
    },
]

const Header = () => {

    const menuRef = useRef(null)
    const headerRef = useRef(null)
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const dispatch = useDispatch()
    const toggleMenu = () => menuRef.current.classList.toggle('show_menu');

const toggleCart=()=>{
    dispatch(cartUiActions.toggle())
}

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('header_shrink')
            }
            else {
                headerRef.current.classList.remove('header_shrink')
            }
        })
        return () => window.addEventListener('scroll')
    }, [])

    return (
        <header className="header" ref={headerRef}>
            <Container>
                <div className="nav_wrapper d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <img src={logo} alt='logo' />
                        <h5>Tasty Treat</h5>
                    </div>

                    {/* {=====================menu=========================} */}
                    <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                        <div className="menu d-flex align-items-center gap-5">
                            {
                                nav_link.map((item, index) => (
                                    <Link
                                        to={item.path} key={index}
                                        className={navClass => navClass.isActive ?
                                            'active_menu' : ''}
                                    >
                                        {item.display}
                                    </Link>
                                    
                                ))
                            }
                        </div>
                    </div>
                    {/* ------------------nav right icons---------------------------- */}
                    <div className="nav_right d-flex align-items-center gap-4">
                        <span className="cart_icon" onClick={toggleCart}>
                            <i class="ri-shopping-cart-fill"></i>
                            <span className="cart_badge">{totalQuantity}</span>
                        </span>
                        
                        <span className="user">
                            <Link to='/login'><i class="ri-user-3-fill"></i></Link>
                        </span>

                        <span className="mobile_menu" onClick={toggleMenu}><i class="ri-menu-line"></i></span>
                    </div>
                </div>
            </Container>
        </header>
    )
}
export default Header