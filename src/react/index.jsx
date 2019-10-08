import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import SignExistingCard from "./components/signExistingCard/main.jsx";
import Home from "./components/home.jsx";

const App = () => {
    return (
        <section>
            <Header />
            <Router>
                <Route exact path="/" component= {Home} />
                <Route path="/sign" component = {SignExistingCard}/>
            </Router>
            <Footer />
        </section>
            
    )
};

ReactDOM.render(<App />, document.querySelector("#mainApp"));