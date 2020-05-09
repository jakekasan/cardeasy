import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";

export const Nav = (props) => {

    let loc = useLocation();

    console.log(loc);
    
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