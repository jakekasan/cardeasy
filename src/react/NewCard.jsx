import React, {
    useState,
    useEffect,
    useReducer,
    useContext
} from "react";

import { Pagination } from "./Pagination";
import { useFormDataStore, StoreContext} from "./FormDataStore";
import SetOccasion from "./SetOccasion";
import SetDesign from "./SetDesign";
import SetCollaborators from "./SetCollaborators";
import SetMessage from "./SetMessage";
import SetSendDetails from "./SetSendDetails";

const NewCard = () => {
    const { get, set, getAll } = useFormDataStore({});
    const onSubmit = () => console.log(getAll());

    return (
        <StoreContext.Provider value={ {get, set, getAll} }>
            <Pagination onLast={ onSubmit }>
                <SetDesign />
                <SetOccasion />
                <SetCollaborators />
                <SetSendDetails />
                <SetMessage />
            </Pagination>
        </StoreContext.Provider>
    )
}

export default NewCard;