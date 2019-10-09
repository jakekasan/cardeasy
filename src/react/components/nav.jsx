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
                        <Link to = "/" >Home</Link>
                    </li>
                    <li>
                        <Link to = "/new" >Send someone a card!</Link>
                    </li>
                    <li>
                        <Link to = "/sign" >Sign someone's card!</Link>
                    </li>
                    <li>
                        <Link to = "/about" >About</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Nav;