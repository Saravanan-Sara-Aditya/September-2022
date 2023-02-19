import React from "react";
import food from "../../Images/mutton-biriyani-recipe.jpeg"
import "../../Css/dishDescription.css"
import Header from "./Header";
function SingleDish() {
    return (
        <>
            <Header />
            <div className="dish_description">
            <div><img id="img" src={food}/></div>
            <div className="des"></div>
            </div>
        </>
    )
}
export default SingleDish