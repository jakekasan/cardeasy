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
                        <Link className="underlined" to = "/" >Home</Link>
                    </li>
                    <li>
                        <Link className="underlined" to = "/new" >Start</Link>
                    </li>
                    <li>
                        <Link className="underlined" to = "/sign" >Sign</Link>
                    </li>
                    <li>
                        <Link className="underlined" to = "/about" >About</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Nav;