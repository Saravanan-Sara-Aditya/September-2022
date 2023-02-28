import React from "react";
import Child from "../FrontEnd-Project/ProductData";
import projectData from "../FrontEnd-Project/data";
import Carousel from "../FrontEnd-Project/Carouselpart";
import Header from "../FrontEnd-Project/Header";
import Footer from "./Footer";
function CategoryDashBoard() {
    const Burger = projectData.filter(item => item.category === 'Burger')
    const Pizza = projectData.filter(item => item.category === 'Pizza')
    const Beverage = projectData.filter(item => item.category === 'Beverage')
    return (
        <>
            <Header/>
            <Carousel />
            <h1>Burger:</h1>
            <div className="parent">
                {
                    Burger.map((item) => {
                        return <Child id={item.id} price={item.price} image={item.image} title={item.title} />
                    })
                }
            </div>
            <h1>Pizza:</h1>
            <div className="parent">
                {
                    Pizza.map((item) => {
                        return <Child id={item.id} price={item.price} image={item.image} title={item.title} />
                    })
                }
            </div>
            <h1>Beverages:</h1>
            <div className="parent">
                {
                    Beverage.map((item) => {
                        return <Child id={item.id} price={item.price} image={item.image} title={item.title} />
                    })
                }
            </div>
            <Footer/>
        </>
    )
}
export default CategoryDashBoard