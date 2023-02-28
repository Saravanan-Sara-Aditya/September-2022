import React from "react";
import "../Css/footer.css"
function Footer() {
    return (
        <>
            <div className="footer">
                <div className="list">
                    <h4>Location:</h4>
                    <ul>
                        <li>Chennai</li>
                        <li>Banglore</li>
                        <li>Hyderabad</li>
                    </ul>
                </div>
                <div className="list">
                    <h4>Contact:</h4>
                    <ul>
                        <li>044-025-4557</li>
                        <li>044-025-4598</li>
                        <li>044-025-4508</li>
                    </ul>
                </div>
            </div>
            <div className="copyrights">
                    <h4>CopyRights:</h4>
                    <p><span className="copyright"><i class="ri-copyright-line"></i></span> Saravanan Ganesh at 2023 All Rights Reserved.</p>
                </div>
        </>
    )
}
export default Footer