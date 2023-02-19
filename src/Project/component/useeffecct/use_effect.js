import axios from "axios";
import React, { useEffect, useState } from "react";
function Album() {
    const [loading,dataload]=useState(true);
    const [show,showdata]=useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then((res)=>{
            showdata(res.data);
            dataload(false)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    return (
        <>
        {loading && <p>Loading.....</p>}
        {
        show.length > 0 && show.map((ele)=>{
            return <div id="parent_1" key={ele.id}>
            <img src={ele.thumbnailUrl}/>
            <p>{ele.title}</p>
            </div>
        }) }
        </>
    )
}
export default Album