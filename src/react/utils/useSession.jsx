import React, { useCallback, useMemo, useState } from "react";

const SessionContext = React.createContext({});

const useSession = () => {

    const [userSessionID, setUserSessionID] = useState(undefined);

    const logMeIn = () => {
        setUserSessionID("JAKE");
        console.log("Set userSessionID");
    }

    return {
        userSessionID,
        logMeIn
    }
}

const Session = ({ children }) => {

    const { userSessionID, logMeIn } = useSession();

    return (
        <SessionContext.Provider value={ {userSessionID, logMeIn} }>
            { children }
        </SessionContext.Provider>
    )
}

export {
    Session,
    SessionContext
}