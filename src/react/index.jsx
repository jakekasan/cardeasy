import React,
{
    useContext,
    useEffect,
    useState
} from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route
} from "react-router-dom";
import styled, { createGlobalStyle, ThemeProvider, ThemeContext } from "styled-components";

import NewCard from "./NewCard/NewCard";
import DatePicker from "./NewCard/DatePicker";
import { TitleElement, TitledContent } from "./NewCard/Layout";
import { SampleResult } from "./NewCard/GetResults";
import { ClassicSample } from "./cards/Sample";

import About from "./About/About";
import Welcome from "./Welcome";

const NavElement = styled.nav`
    background-color: ${props => props.theme.colors.dark.primary};
    width: ${props => props.theme.appWidth}px;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    & a {
        color: ${props => props.theme.colors.dark.secondary};
        transition: 0.5s;
        border-radius: 25px;
        padding: 10px;
        text-decoration: none;
        color: ${props => props.theme.colors.dark.secondary};
    }
    
    & a:hover {
        background: white;
        color: ${props => props.theme.colors.dark.primary};
        transition: 0.5s;
    };

`;

const NavItem = ({ to, children }) => {
    return (
        <Link to={ to }>
            { children }
        </Link>
    )
}

const HeaderElement = styled.header`
    width: 100vw;
    padding: 20px 0px;
    display: grid;
    place-items: center;
    background-color: ${props => props.theme.colors.dark.primary};
`;


const Header = () => {
    return (
        <HeaderElement>
            <NavElement>
                <NavItem to="/">CardEasy</NavItem>
                <NavItem to="/new">New Card</NavItem>
                <NavItem to="/sign">Sign Card</NavItem>
                <NavItem to="/about">About</NavItem>
            </NavElement>
        </HeaderElement>
    )
}

const Content = () => {

    const { appWidth } = useContext(ThemeContext);

    return (
        <TitledContent>
            <TitleElement>This is a title</TitleElement>
            <p>
                { `The #App element should be ${appWidth} px wide` }
            </p>
        </TitledContent>
    )
}


const GlobalStyle = createGlobalStyle`
    body {
        background: ${props => props.theme.colors.dark.secondary};
        margin: 0;
        padding: 0;
        display: grid;
        place-items: center;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

        &, & * {
            box-sizing: border-box;
        }
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }

    #App {
        width: 100vw;
        min-height: 100vh;
        padding: 0;
        display: flex;
        flex-direction: column;
    }
`;


const useTheme = () => {
    
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    
    useEffect(() => {
        let handleResize = () => {

            const { innerWidth: width, innerHeight: height } = window;

            setSize({
                width,
                height
            });
        }
        
        window.addEventListener("resize", handleResize);
        
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    })
    
    const bindWidth = (width) => {
        switch (true) {
            case width > 850:
                return 800
            case width > 450:
                return 400
            default:
                return 300
        }
    }

    return {
        appWidth: bindWidth(size.width),
        colors: {
            dark: {
                primary: "black",
                secondary: "white",
                tertiary: "lightgray",
                hover: "darkgray",
                selected: "gray"
            }
        }
    }
}

const PlaceHolder = () => {
    return (
        <TitledContent>
            <TitleElement>Title goes here...</TitleElement>
            <section>
                <h5>Subheadring</h5>
                <p>Much stuff!!</p>
            </section>
        </TitledContent>
    )
}

const Main = styled.main`
    width: ${props => props.theme.appWidth}px;
    margin: 0 auto;
    padding: 10px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
`;

const Sample = () => {
    return (
        <SampleResult>
            <ClassicSample />
        </SampleResult>
    )
}

const App = () => {

    const theme = useTheme();

    return (
        <Router>
            <ThemeProvider theme={ theme }>
                <GlobalStyle />
                <Header />
                <Main>
                    <Switch>
                        <Route exact path="/" component={ Welcome }/>
                        <Route path="/new" component={ NewCard }/>
                        <Route path="/about" component={ About }/>
                        <Route path="/sign" component={ PlaceHolder } />
                        <Route path="/datepicker" component={ DatePicker } />
                        <Route path="/sample" component={ Sample } />
                    </Switch>
                </Main>
            </ThemeProvider>
        </Router>
    )
}

ReactDOM.render(<App/>, document.getElementById("App"));