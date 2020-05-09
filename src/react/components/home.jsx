import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <main>
            <section>
                <Link to="/new">Make a new card from scratch</Link>
                <aside>
                    <p>Blah blah blah blah. </p>
                </aside>
            </section>
            <section>
                <Link to="/sign">Sign an existing card</Link>
            </section>
        </main>
    )
};