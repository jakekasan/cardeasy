import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";

const App = () => {
    return (
        <section>
            <Header />
            <Router>
                <Route exact path="/" component= { () => {
                    <h1>Cahooonah</h1>
                } } />
                <Route path="/sign" component = { () => {
                    <h1> Not Cahoonah</h1>
                } }/>
            </Router>
            <Footer />
        </section>
            
    )
};

ReactDOM.render(<App />, document.querySelector("#mainApp"));