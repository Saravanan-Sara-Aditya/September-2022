import React from "react";
import { increment,decrement, data } from "../Redux/logic";
import { useSelector,useDispatch } from "react-redux";
function Counter(){
    const add=useSelector(data);
    const dispatch=useDispatch();
return(
    <>
    <p>{add}</p>
    <button onClick={()=>dispatch(increment())}>Increment</button>
    <br></br>{' '}
    <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </>
)
}
export default Counter