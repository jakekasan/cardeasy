import React, { useReducer, useState } from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";

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

const MultiPartForm = ({ children }) => {

    const [ formChildValid, setFromChildValid ] = useState(false);

    const reducer = (action, currentPage) => {
        switch (action.type) {
            case "next":
                if (currentPage < children.length - 1) return currentPage + 1

                // otherwise submit
                submit()
            case "back":
                return (currentPage > 0) ? currentPage - 1 : currentPage
            default:
                return currentPage
        }
    }

    const [ currentPage, currentPageDispatch ] = useReducer(reducer, 0);

    const pageNext = () => currentPageDispatch({ type: "next" });
    const pageBack = () => currentPageDispatch({ type: "back" });

    return (
        <section>
            <article>
                { React.cloneElement( children[state.currentPage], { setIsValid: setFromChildValid })}
            </article>
            <Button className={ "BackButton" } onClick={ pageBack }>Back</Button>
            <Button className={ "NextButton" } onClick={ pageNext }>{ (state) }</Button>
        </section>
    )
}

const PageNotFound = () => <h3>Oops...</h3>

const NewApp = () => {
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

ReactDOM.render(<NewApp />, document.querySelector("#App"));