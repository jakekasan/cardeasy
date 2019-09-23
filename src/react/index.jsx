import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";

const App = () => {
    return (
        <section>
            <Header />
            <h1>CARDEASY</h1>
            <Footer />
        </section>
            
    )
};

ReactDOM.render(<App />, document.querySelector("#mainApp"));