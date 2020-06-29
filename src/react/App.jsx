import React, { useReducer, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from "react-router-dom";

import "./Styles.sass";

const MainLogo = () => <h1>CardEasy</h1>

const Nav = () => {
    return (
        <nav>
            <Link to="/new">New</Link>
            <Link to="/sign">Sign</Link>
            <Link to="/about">About</Link>
        </nav>
    )
}

const Header = () => {
    return (
        <header>
            <MainLogo title={ "Cardeasy" } />
            <Nav />
        </header>
    )
}

const Footer = () => {
    return (
    <footer>
        <h3>End of the page</h3>
    </footer>
    )}

const ChildOne = (props) => {
    useEffect(() => () => console.log("ChildOne unmounting"), []);

    return (
        <>
        <h5>First Child</h5>
        <input type="text" onBlur={ () => console.log("input blurring") }/>
        </>
    )
}

const ChildTwo = (props) => {
    useEffect(() => () => console.log("ChildTwo unmounting"), []);

    return (
        <>
        <h5>Second Child</h5>
        <div>
            <input type="color"/>
        </div>
        </>
    )
}

const MultiPartForm = ({ children }) => {

    const [ formChildValid, setFromChildValid ] = useState(false);

    const reducer = (state, action) => {
        console.log(`Reducer with state = ${JSON.stringify(state)} and action = ${JSON.stringify(action)}`);
        switch (action.type) {
            case "next":
                if (state.currentPage < children.length - 1) {
                    return { ...state, currentPage: state.currentPage + 1}
                } else {
                    return state
                }


            case "back":
                if (state.currentPage > 0) {
                    return { ...state, currentPage: state.currentPage - 1 }
                } else { 
                    return state
                }

            default:
                return currentPage
        }
    }

    const [ state, dispatch ] = useReducer(reducer, { currentPage: 0});

    const pageNext = () => {
        console.log("Clicked next...")
        dispatch({ type: "next" })
    };

    const pageBack = () => {
        console.log("Clicked back...")
        dispatch({ type: "back" })
    };

    console.log("Rendering page", state.currentPage)

    return (
        <section className="MultiPartForm">
            <article>
                { React.cloneElement( children[state.currentPage], { pageNumber: state.currentPage + 1, setIsValid: setFromChildValid })}
            </article>
            <button className={ "BackButton" } onClick={ pageBack }>Back</button>
            <button className={ "NextButton" } onClick={ pageNext }>{ (state.currentPage < children.length - 1) ? "Next" : "Submit" }</button>
        </section>
    )
}

const PageNotFound = () => <h3>Oops...</h3>
const SplashPage = () => <h3>Blamo! You're home!</h3>
const Content = ({children}) => <main>{ children }</main>

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
                            <MultiPartForm>
                                <ChildOne />
                                <ChildTwo />
                            </MultiPartForm>
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
// ReactDOM.render(<NewApp />, document.querySelector("#App"));