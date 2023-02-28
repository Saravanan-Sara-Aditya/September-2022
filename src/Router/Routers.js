import React from "react";
import { Route, Switch } from "react-router-dom";
import CategoryDashBoard from "../FrontEnd-Project/CategoryDashobard"
import FoodDetails from "../FrontEnd-Project/FoodDetails";
import ArrayExample from "../FrontEnd-Project/AllFoods";
import Login_page from "../FrontEnd-Project/LoginPage";
import Register from "../FrontEnd-Project/Register";


const Routers = () => {
    return (
        <Switch>
            <Route exact path='/'><Login_page /></Route>
            <Route path='/home'><CategoryDashBoard /></Route>
            <Route path='/food_details'><FoodDetails /></Route>
            <Route path='/all_foods'><ArrayExample /></Route>
            <Route path='/login_page'><Login_page /></Route>
            <Route path='/Register_page'><Register /></Route>
            
        </Switch>

    )
}
export default Routers