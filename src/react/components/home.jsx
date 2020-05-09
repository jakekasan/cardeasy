import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <body>
                <ul>
                    <li>
                        <Link to="/new">Sign a new card!</Link>
                    </li>
                    <li>
                        <Link to="/sign">Sign an existing card!</Link>
                    </li>
                    <li>
                        <Link to="/about">FAQs</Link>
                    </li>
                </ul>
            </body>
        )
    }
}

export default Home;