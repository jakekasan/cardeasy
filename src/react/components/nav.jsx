import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <Link className="buttonStyle" to = "/" >Home</Link>
                    </li>
                    <li>
                        <Link className="buttonStyle" to = "/new" >Start</Link>
                    </li>
                    <li>
                        <Link className="buttonStyle" to = "/sign" >Sign</Link>
                    </li>
                    <li>
                        <Link className="buttonStyle" to = "/about" >About</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Nav;