import React, { useReducer, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    useLocation
} from "react-router-dom";

import NewCardForm from "./NewCardForm.jsx";
import { Header, Footer, Content, Nav } from "./Layout.jsx";
import "./Styles.sass";

const PageNotFound = () => <h3>Oops...</h3>
const SplashPage = () => {
    return (
        <Nav />
    )
}

const App = () => {
    return (
        <>
            <Router>
                <Header />
                <Content>
                    <Switch>
                        <Route exact path="/">
                            <SplashPage />
                        </Route>
                        <Route path="/new">
                            <NewCardForm />
                        </Route>
                        <Route path="*">
                            <PageNotFound />
                        </Route>
                    </Switch>
                </Content>
                <Footer />
            </Router>
        </>
    )
}

export default App;