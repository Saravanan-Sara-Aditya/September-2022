import React, { useState } from "react";
import "../../Css/ArrayExample.css"
import Child from "./Child_component";
function ArrayExample() {
    const [chinese] = useState([
        {
            "albumId": 1,
            "id": 9,
            "title": "Egg Gravy",
            "url": "https://via.placeholder.com/600/51aa97",
            "thumbnailUrl": "https://www.whiskaffair.com/wp-content/uploads/2020/04/Kerala-Style-Egg-Curry-2-3.jpg"
        },
        {
            "albumId": 1,
            "id": 10,
            "title": "Prawn Gravy",
            "url": "https://via.placeholder.com/600/810b14",
            "thumbnailUrl": "https://www.funfoodfrolic.com/wp-content/uploads/2020/12/Chettinad-Prawn-Masala-Thumbnail.jpg"
        },
        {
            "albumId": 1,
            "id": 11,
            "title": "Chicken Biriyani",
            "url": "https://via.placeholder.com/600/92c952",
            "thumbnailUrl": "https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg"
        },
        {
            "albumId": 1,
            "id": 12,
            "title": "Mutton Biriyani",
            "url": "https://via.placeholder.com/600/771796",
            "thumbnailUrl": "https://www.licious.in/blog/wp-content/uploads/2020/12/Mutton-Biryani.jpg"
        },
    ])
    const [south_indian] = useState([
        {
            "albumId": 1,
            "id": 5,
            "title": "Rabbit Biriyani",
            "url": "https://via.placeholder.com/600/f66b97",
            "thumbnailUrl": "https://b.zmtcdn.com/data/pictures/0/18610260/84940fe59131029562dcc5f32f357baa_featured_v2.jpg"
        },
        {
            "albumId": 1,
            "id": 6,
            "title": "Chicken Gravy",
            "url": "https://via.placeholder.com/600/56a8c2",
            "thumbnailUrl": "https://static.toiimg.com/thumb/54658925.cms?imgsize=268669&width=800&height=800"
        },
        {
            "albumId": 1,
            "id": 7,
            "title": "Mutton Gravy",
            "url": "https://via.placeholder.com/600/b0f7cc",
            "thumbnailUrl": "https://www.whiskaffair.com/wp-content/uploads/2019/04/Punjabi-Mutton-Curry-5.jpg"
        },
        {
            "albumId": 1,
            "id": 8,
            "title": "Fish Gravy",
            "url": "https://via.placeholder.com/600/54176f",
            "thumbnailUrl": "https://www.tamarindnthyme.com/wp-content/uploads/2020/10/Untitled-design-91-720x720.jpg"
        },
    ])
    const [data] = useState([
        {
            "albumId": 1,
            "id": 1,
            "title": "Chicken Biriyani",
            "url": "https://via.placeholder.com/600/92c952",
            "thumbnailUrl": "https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg"
        },
        {
            "albumId": 1,
            "id": 2,
            "title": "Mutton Biriyani",
            "url": "https://via.placeholder.com/600/771796",
            "thumbnailUrl": "https://www.licious.in/blog/wp-content/uploads/2020/12/Mutton-Biryani.jpg"
        },
        {
            "albumId": 1,
            "id": 3,
            "title": "Prawn Biriyani",
            "url": "https://via.placeholder.com/600/24f355",
            "thumbnailUrl": "https://thumbs.dreamstime.com/b/prawns-biryani-prawn-aromatic-basmati-rice-dum-cooked-herbs-spice-powders-195566641.jpg"
        },
        {
            "albumId": 1,
            "id": 4,
            "title": "Fish Biriyani",
            "url": "https://via.placeholder.com/600/d32776",
            "thumbnailUrl": "https://c8.alamy.com/comp/2GE1R8A/fish-biryani-spicy-and-delicious-malabar-biryani-or-hyderabadi-biryani-dum-biriyani-pulao-kerala-india-sri-lanka-basmati-rice-herbs-raitha-eid-2GE1R8A.jpg"
        }
    ]
    )
    return (
        <>
            <h1>Biriyani:</h1>
            <div className="parent">
                {
                    data.map((ele) => {
                        return <Child thumbnailUrl={ele.thumbnailUrl} title={ele.title} />
                    })
                }                
            </div>
            <button className="btn btn-primary see_more">Click Here to See More...</button>
            <h1>Chinese:</h1>
            <div className="parent">
                {
                    chinese.map((ele) => {
                        return <Child thumbnailUrl={ele.thumbnailUrl} title={ele.title} />
                    })
                }
            </div>
            <button className="btn btn-primary see_more">Click Here to See More...</button>
            <h1>South Indian:</h1>
            <div className="parent">
                {
                    south_indian.map((ele) => {
                        return <Child thumbnailUrl={ele.thumbnailUrl} title={ele.title} />
                    })
                }
            </div>
            <button className="btn btn-primary see_more">Click Here to See More...</button>
        </>
    )
}
export default ArrayExample