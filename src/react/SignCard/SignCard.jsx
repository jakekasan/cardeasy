import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { SessionContext } from "./../utils/useSession";

const LoginPrompt = styled.article`
    flex: 1 0 0;
    display: flex;
`;

const SignCardPrompt = styled.h3`

`;

const SignCardInputEmail = styled.input``;

const SignInButton = styled.button`
    border: none;
    padding: 10px;
`;

const Login = () => {
    // get login context
    const [email, setEmail] = useState("");
    const { logMeIn } = useContext(SessionContext);

    const handleEmailChange = ({ target: { value }}) => setEmail(() => value);

    const handleSignInClick = (event) => {
        console.log("Log in!");
        logMeIn();
    }

    return (
        <LoginPrompt>
            <SignCardPrompt>Enter an email to log in.</SignCardPrompt>
            <SignCardInputEmail value={ email } onChange={ handleEmailChange } name="email" />
            <SignInButton onClick={ handleSignInClick } />
        </LoginPrompt>
    )
}

const CardChoicesList = styled.ul`
    list-style: none;
    display: flex;
`;

const CardContainer = styled.li`
    display: flex;
`;

const CardChoice = ({card}) => {
    const { sender, recipient, occasion } = card;
    return (
        <CardContainer>
            <p>{ sender.name } wants you to sign a card for { recipient.name } for { occasion }.</p>
        </CardContainer>
    )
}
const CardChoices = ({ cards }) => {
    return (
        <CardChoicesList>
            { cards && cards.map(card => {
                return <CardChoice key={ card.id } card={ card } />
            }) }
        </CardChoicesList>
    )
}

const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(true);
    const [result, setResult] = useState(undefined);
    const [error, setError] = useState(undefined);

    fetch(url)
        .then(data => setResult(data))
        .catch(err => setError(err))
        .finally(() => setIsLoading(false))

    return { result, isLoading, error }
}

const USER_DATA = {
    user: {
        name: "Jake",
        email: "j@k.com",
        cards: [
            {
                recipient: {
                    name: "Darth Vader",
                    email: "vader@empire.imp"
                },
                sender: {
                    name: "Luke Skywalker",
                    email: "luke@rebels.alliance"
                },
                occasion: "Father's day"
            }
        ]
    }
}

const useDummyFetch = (url) => {
    const [isLoading, setIsLoading] = useState(true);
    const [result, setResult] = useState(undefined);
    const [error, setError] = useState(undefined);
    const [hasRun, setHasRun] = useState(false);
    
    if (!hasRun) {
        new Promise((resolve, reject) => {
            setHasRun(true)
            setTimeout(() => {
                console.log("Resolving with", {USER_DATA})
                return resolve(USER_DATA);
            }, 2000)
        })
            .then(data => setResult(data))
            .catch(err => setError(err))
            .finally(() => setIsLoading(false))
    }
    return { result, isLoading, error }
}

const Loading = () => {
    return <h1>Loading...</h1>
}

const Error = ({ message }) => {
    return <h1>{ message }</h1>
}

const UserData = ({ user }) => {
    console.log({ user })
    return (
        <div>
            <h3>Hello, { user.name }</h3>
            <CardChoices cards={ user.cards } />
        </div>
    )
}

const LoadUserData = () => {
    // if we have a sessionID, get user data from server and render
    const { userSessionId } = useContext(SessionContext);
    const { result, isLoading, error } = useDummyFetch(userSessionId);

    useEffect(() => {
        console.log({result, isLoading, error});
    }, [result, isLoading, error]);

    return (
        (isLoading)
            ? <Loading />
            : (error === undefined)
                ? <UserData user={ result.user } />
                : <Error {...error} />
    )
}

let SignCard = () => {
    // check if sessionID is in cookies
    const { userSessionID } = useContext(SessionContext);

    useEffect(() => {
        console.log("SignCard", { userSessionID });
    }, [userSessionID]);
    // if not render login screen
    return (
        (userSessionID === undefined)
            ? <Login />
            : <LoadUserData />
    )
}

export default SignCard;