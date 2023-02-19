import React from "react";
import Slider from "react-slick";

import ava01 from '../../../assets/images/ava-1.jpg'
import ava02 from '../../../assets/images/ava-2.jpg'
import ava03 from '../../../assets/images/ava-3.jpg'

import '../../../styles/slider.css'

const TestimonialSlider = () => {

    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <Slider{...settings}>
            <div>
                <p className="review_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam animi quod laborum eos quia dignissimos, accusantium excepturi, reprehenderit consequuntur sequi quam. Obcaecati optio laudantium ratione quisquam nobis sunt repudiandae iste?</p>
                <div className=" slider_content d-flex align-items-center gap-3">
                    <img src={ava01} alt="avatar" className="rounded" />
                    <h6>Jhon Doe</h6>
                </div>
            </div>
            <div>
                <p className="review_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam animi quod laborum eos quia dignissimos, accusantium excepturi, reprehenderit consequuntur sequi quam. Obcaecati optio laudantium ratione quisquam nobis sunt repudiandae iste?</p>
                <div className=" slider_content d-flex align-items-center gap-3">
                    <img src={ava02} alt="avatar" className="rounded" />
                    <h6>Eclestone</h6>
                </div>
            </div>
            <div>
                <p className="review_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam animi quod laborum eos quia dignissimos, accusantium excepturi, reprehenderit consequuntur sequi quam. Obcaecati optio laudantium ratione quisquam nobis sunt repudiandae iste?</p>
                <div className=" slider_content d-flex align-items-center gap-3">
                    <img src={ava03} alt="avatar" className="rounded" />
                    <h6>Steve Crock</h6>
                </div>
            </div>
        </Slider>
    )
}
export default TestimonialSlider