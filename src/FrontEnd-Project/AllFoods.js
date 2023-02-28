import React from "react";
import { useState} from "react";
import "../Css/AllFoods.css"
import { SearchRounded } from "@mui/icons-material";
import Child from "../FrontEnd-Project/ProductData";
import projectData from "../FrontEnd-Project/data";
import Header from "../FrontEnd-Project/Header";
function ArrayExample() {
    const [searchTerm, setSearchTerm] = useState('')
    const [productData, setProductData] = useState(projectData)
    return (
        <>
            <Header />
            <div className="inputBox">
                <SearchRounded className="searchIcon" />
                <input id="search" type="text" placeholder="Search" value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <div className="parent">
                {productData.filter((ele) => {
                    if (searchTerm.value === ' ') return ele;
                    if (ele.title
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())) return ele;
                })
                    .map((ele) => {
                        return <Child id={ele.id} price={ele.price} image={ele.image} title={ele.title} />
                    })
                }
            </div>
        
        </>
    )
}
export default ArrayExample