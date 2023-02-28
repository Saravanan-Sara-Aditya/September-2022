import { React, useState, } from "react";
import { Col, Container, Row } from "reactstrap";
import projectData from "../FrontEnd-Project/data";
import ProductDescription from "../FrontEnd-Project/ProductDescription";
import '../Css/fooddetails.css'
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../FrontEnd-Project/Header";
function FoodDetails() {
    const [details, setDetails] = useState({
        image: '',
        title: '',
        price: '',
        category: '',
        desc: ''
    })


    const { search } = useLocation();

    const query = new URLSearchParams(search);

    useEffect(() => {
        const RequiredProducts = projectData.filter((elem) => elem.id === query.get('id'));
        setDetails(RequiredProducts[0]);
    }, [])
    return (
        <>
            <Header />
            <ProductDescription title={details.title} />
            <section>
                <Container>
                    <Row>
                        <Col>
                            <div className="product_images">
                                <div className="img_item">
                                    <img src={details.image} alt='product-01' className="w-25" />
                                </div>
                                <div className="img_item">
                                    <img src={details.image} alt='product-01' className="w-25" />
                                </div>
                                <div className="img_item">
                                    <img src={details.image} alt='product-01' className="w-25" />
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="product_main-img">
                                <img src={details.image} alt="product-01" className="w-100" />
                            </div>
                        </Col>
                        <Col>
                            <div className="product_content">
                                <h2 className="product_title">{details.title}</h2>
                                <p className="price">Price:<span>${details.price}</span></p>
                                <p className="category">Category:<span>{details.category}</span></p>
                                <button className="btn btn-danger">Add to Cart</button>
                            </div>
                        </Col>
                        <Col lg='12'>
                            <div className="tabs d-flex align-items-center gap-3 py-2">
                                <h6 className="tab_active">Description:</h6>
                            </div>
                            <div className="tab_content">
                                <p>{details.desc}</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default FoodDetails