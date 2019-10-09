import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import SignExistingCard from "./components/signExistingCard/main.jsx";
import MakeNewCard from "./components/makeNewCard/main.jsx";
import Home from "./components/home.jsx";
import Nav from "./components/nav.jsx";
import About from "./components/about.jsx";

const App = () => {
    return (
        <section>
            <Header />
            <Router>
                <Nav />
                <Route exact path="/" component= { Home } />
                <Route path="/sign" component = { SignExistingCard }/>
                <Route path="/new" component = { MakeNewCard } />
                <Route path="/about" component = { About } />
            </Router>
            <Footer />
        </section>
    )
};

ReactDOM.render(<App />, document.querySelector("#mainApp"));