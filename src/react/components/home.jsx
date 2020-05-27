import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <main>
            <ul>
                <Link className="buttonStle" to="/new">Start</Link>
                <Link className="buttonStle" to="/sign">Sign</Link>
            </ul>
        </main>
    )
};