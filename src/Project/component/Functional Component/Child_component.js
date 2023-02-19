import React from "react";
function Child(props) {
    return (
        <>
            <table>
                <tr>
                    <td>
                        <div className="dish_items_box">
                            <img src={props.thumbnailUrl}></img>
                            <p>{props.title}
                            <button className="btn btn-success view">View</button>
                            <button className="btn btn-danger">Cart</button>
                            </p>
                        </div>
                    </td>
                </tr>
            </table>
        </>
    )
}
export default Child