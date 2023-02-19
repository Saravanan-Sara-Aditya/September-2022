import React from "react";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import ArrayExample from "./Project/component/Functional Component/ArrayExample";
import Carousel from "./Project/component/Projects/Carouselpart";
import Header from "./Project/component/Projects/Header";
import Register from "./Project/component/Projects/Register.js"
import Login_page from "./Project/component/Projects/LoginPage";
function Project() {
  return (
    <>
      {/* <BrowserRouter>
        <Switch>
          <Route path='/login_page'>
            <Login_page />
          </Route>
          <Route path='/Register_page'>
            <Register />
          </Route>
        </Switch>
      </BrowserRouter> */}
      <Header/>
      <Carousel/>
      <ArrayExample/>
    </>
  )
}
export default Project