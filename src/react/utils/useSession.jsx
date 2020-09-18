import React, { useState } from "react";

const SessionContext = React.createContext({});

const useSession = () => {

    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [testCookie, setTestCookie] = useState("");

    const getCookie = (name) => {
        if (name === "test") {
            return testCookie
        }
    }

    const setCookie = (name, value) => {
        console.log("setCookie", { name, value });
        if (name === "test") {
            setTestCookie(value);
        }
    }

    return {
        getCookie,
        setCookie
    }
}

export {
    useSession
}