import React, { useState } from "react";
import PropTypes from "prop-types";

const SessionContext = React.createContext(() => {
    var session = null;
    
    const resource = {
        read: () => {
            switch (true) {
                case session !== null:
                    return session
                case session === null:
                default:
                    throw Error("No session found")
            }
        }
    }

    const update = newSession => {
        session =
            newSession instanceof Function ? newSession(session) : newSession;
    }

    const clear = () => session = null;

    return {
        resource,
        update,
        clear
    }
});

const Session = ({children}) => {

    const [session, setSession] = useState(() => {
        console.log("Setting inital session value")
        try {
            const storedSession = window.localStorage.getItem("session");
            if (storedSession !== null) {
                return storedSession
            } else {
                throw Error("No session found in localStorage");
            }
        } catch (e) {
            console.log(e);
            return null
        }
    })

    const updateSession = newSession => {
        let updatedSession =
            newSession instanceof Function ? newSession(session) : newSession;

        console.log("Updating session to", { updatedSession });
        
        setSession(updatedSession);
        window.localStorage.setItem("session", updatedSession)
    }

    const clearSession = () => {
        setSession(null);
        console.log("Clearing session...");
        window.localStorage.removeItem("session");
    }

    const context = {
        session,
        update: updateSession,
        clear: clearSession
    }

    return (
        <SessionContext.Provider value={ context }>
            { children }
        </SessionContext.Provider>
    )
}

Session.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element)
}

export {
    Session as default,
    SessionContext
}