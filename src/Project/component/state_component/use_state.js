import React, { useState } from "react";
function StateExample(){
    let [data,setdata]=useState(0)
    function handler(){
        setdata(data+1)
    }
    return(
        <>
        <p>{data}</p>
        <button onClick={handler}>Click</button>
        </>
    )
}
export default StateExample