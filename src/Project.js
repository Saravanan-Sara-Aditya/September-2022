import React from "react";
import Cart from "./FrontEnd-Project/Cart"
import { useSelector } from "react-redux";
import Routers from "./Router/Routers";
function Project() {

  const showCart = useSelector(state => state.cartUi.cartIsVisible)

  return (

    <>
      {
        showCart && <Cart />
      }
      <div>
      <Routers/>
      </div>
      
    </>
  )
}
export default Project