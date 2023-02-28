import React, { Component } from "react";
import Child_example from "./child_component";
class Class_Example extends Component {
    constructor() {
        super()
        this.state={
            text:'Hello'
        }
    }
    change(){
        this.setState({
            text:'Welcome'
        })
    }
    render() {
        return (
            <>
                <p>{this.state.text}</p>
                <Child_example name='sam'/>
                <Child_example name='ram'/>
                <button onClick={()=>this.change()}>Change</button>
            </>
        )
    }
}
export default Class_Example