import React from "react"
import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="menu my-2">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li>About us</li>
                    <li>Terms</li>
                </ul>
            </div>
            <div className="copyright mb-2">
                <small>Copyright © 2021 Complex-app. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer