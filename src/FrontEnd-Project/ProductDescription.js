import React from "react";
import { Container } from "reactstrap";
import '../Css/common-section.css'
const ProductDescription = (props) => {
    return (
        <section className="common_section">
            <Container>
                <h2 className="text-white">{props.title}</h2>
            </Container>
        </section>
    )
}
export default ProductDescription