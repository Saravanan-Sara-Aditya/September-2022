import React from "react";
import slider_1 from "../assets/images/banner_01.jpg";
import slider_2 from "../assets/images/banner_02.jpg";
import slider_3 from "../assets/images/banner_03.jpg";
import '../Css/dashboard.css'
function Carousel() {
    return (
        <div className="dashboard">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">

                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <h1>Classic Burgers:</h1>
                        <img src={slider_1} className="d-inline slider_1" alt="Silde_1" />
                    </div>
                    <div className="carousel-item">
                        <h1>Classic Burgers:</h1>
                        <img src={slider_2} className="d-inline slider_1" alt="Silde_2" />
                    </div>
                    <div className="carousel-item">
                        <h1>Classic Burgers:</h1>
                        <img src={slider_3} className="d-inline slider_1" alt="Silde_3" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Carousel