import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { useSession } from "./../utils/useSession";

const LoginPrompt = styled.article`
    flex: 1 0 0;
    display: flex;
`;

const SignInButton = styled.button`
    border: none;
    padding: 10px;
`;

const Login = () => {

    // get login context


    const handleSignInClick = (event) => {

    }

    return (
        <LoginPrompt>
            <SignCardPrompt />
            <SignCardInputEmail />
            {/* <SignInButton onClick={  } /> */}
        </LoginPrompt>
    )
}

// const CardChoices = () => {
//     return (
//         <>
//         </>
//     )
// }

// let SignCard = () => {

//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     return (
//         (isLoggedIn)
//             ? <Login />
//             : <CardChoices />
//     )
// }

let SignCard = () => {
    const { getCookie, setCookie } = useSession();
    const [cookieValue, setCookieValue] = useState("");
    //const [cookieKey, setCookieKey] = useState("");
    const [storedValue, setStoredValue] = useState(() => getCookie("test"));

    useEffect(() => {
        setCookie("test", cookieValue);
        setStoredValue(() => getCookie("test"))
    }, [cookieValue])

    return (
        <div>
            <strong>{ storedValue }</strong>
            <input type="text" value={ cookieValue } onChange={ ({ target: { value }}) => setCookieValue(value) } />
            <button onClick={ () => setCookie("test", cookieValue)}>setCookie</button>
            <button onClick={ () => setStoredValue(() => getCookie("test"))} >Refresh</button>
        </div>
    )
}

export default SignCard;