import React from "react";
import ReactDOM from "react-dom";

import Header from "components/header";
import Footer from "components/footer";

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