import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { SessionContext } from "../utils/Session";
import { UserContext} from "../utils/User";

const LoginPromptContainer = styled.div`
    flex: 1 0 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
`;

const LoginPrompt = styled.article`
    /* flex: 1 0 0; */
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid grey;
`;

const SignCardPrompt = styled.h3`

`;

const SignCardInputEmail = styled.input`
    padding: 5px;
`;

const SignInButton = styled.button`
    border: none;
    padding: 10px;
`;

class RequireLogin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
        this.handleLogin = this.handleLogin.bind(this);
    }

    componentDidCatch(a, b) {
        console.log("RequireLogin.componentDidCatch", {a, b})
    }

    componentDidUpdate(oldProps) {
        console.log("RequireLogin.componentDidUpdate", {oldProps});
        console.log(this.context);
    }

    static getDerivedStateFromError(err) {
        console.log("RequireLogin", {err});
        return { hasError: true}
    }

    handleLogin() {
        console.log("RequireLogin: Setting error to false");
        this.setState({
            hasError: false
        })
    }

    render() {
        if (this.state.hasError) {
            return <Login onLogin={ this.handleLogin }/>
        } else {
            return this.props.children
        }
    }
}

RequireLogin.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element)
}


const Login = ({ onLogin }) => {
    const { session, update } = useContext(SessionContext);
    const { setUserId } = useContext(UserContext);

    const handleOnClick = () => {
        console.log("Login clicked!");
        setUserId("2");
        update("da session");
        onLogin();
    }

    useEffect(() => {
        console.log("NewLogin session changed", { session });
    }, [session])

    return (
        <LoginPromptContainer>
            <LoginPrompt>
                <SignCardPrompt>Login</SignCardPrompt>
                <SignCardInputEmail />
                <SignInButton onClick={ handleOnClick }>Sign In</SignInButton>
            </LoginPrompt>
        </LoginPromptContainer>
    )
}

Login.propTypes = {
    onLogin: PropTypes.func
} 

export default RequireLogin;