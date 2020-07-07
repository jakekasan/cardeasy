import React from "react";
import {
    BrowserRouter as Router,
    Link,
    useLocation
} from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <Link to="/new">New</Link>
            <Link to="/sign">Sign</Link>
            <Link to="/about">About</Link>
        </nav>
    )
}

const MainLogo = () => <h1>CardEasy</h1>

const Header = () => {
    const location = useLocation();

    return (
        <header>
            <MainLogo title={ "Cardeasy" } />
            { (location.pathname == "/" ) ? undefined : <Nav /> }
        </header>
    )
}

const Footer = () => {
    return (
        <footer>
            <h3>End of the page</h3>
        </footer>
    )
}

const Title = ({ children }) => {
    return <h3 className="title">{ children }</h3>
}

const Content = ({ children }) => {
    return <section className="content">{ children }</section>
}

const TitledContent = ({ children }) => <article className="content">{ children }</article>

const SubContent = ({children}) => <main className="SubContent">{ children }</main>

export {
    Header,
    Footer,
    Content,
    TitledContent,
    Title,
    SubContent,
    Nav
}