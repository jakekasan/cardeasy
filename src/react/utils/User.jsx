import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

import { UserStore } from "./Store";
import { SessionContext } from "./Session";
import createResource from "./createResource";

const UserContext = React.createContext(() => {

    var user = null;

    const setUser = u => user = u;
    const timeout = new Promise()

    return {
        resource: {
            read: () => {
                console.log("UserContext.default.read");
                if (user !== null) {
                    return user
                } else {
                    console.log("No user data in default context");
                    throw timeout
                }
            }
        },
        setUserId: (id) => {
            console.log("UserContext.default.setUserId", {id})
            setUser({
                name: "Jake",
                cards: [1,2,3]
            })
        }
    }
});

const User = ({children}) => {

    const { resource: session } = useContext(SessionContext);
    const [userId, setUserId] = useState(() => {
        try {
            let storedSession = window.localStorage.getItem("currentUserId");
            if (storedSession !== null) {
                return storedSession
            } else {
                throw Error("No stored currentUserId found");
            }
        } catch (e) {
            console.log(e);
            return null
        }
    });

    const updateUserId = id => {
        let updatedId = id instanceof Function ? id(userId) : id;
        setUserId(updatedId);
        window.localStorage.setItem("currentUserId", updatedId);
    }

    const [resource, setResource] = useState(null);

    useEffect(() => {
        console.log("UserContext useEffect", { userId, session });
        setResource(createResource(UserStore.getById(userId, session)))
    }, [session, userId])

    const context = {
        resource,
        userId,
        setUserId: updateUserId
    }

    return (
        <UserContext.Provider value={ context }>
            { children }
        </UserContext.Provider>
    )
}

User.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element)
}

export {
    User as default,
    UserContext
};