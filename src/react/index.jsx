import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import SignExistingCard from "./components/signExistingCard/main.jsx";
import MakeNewCard from "./components/makeNewCard/main.jsx";
import Home from "./components/home.jsx";
import Nav from "./components/nav.jsx";

const App = () => {
    return (
        <section>
            <Header />
            <Nav />
            <Router>
                <Route exact path="/" component= { Home } />
                <Route path="/sign" component = { SignExistingCard }/>
                <Route path="/new" component = { MakeNewCard } />
            </Router>
            <Footer />
        </section>
            
    )
};

ReactDOM.render(<App />, document.querySelector("#mainApp"));