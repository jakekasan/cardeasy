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
import GetResults from "./GetResults";
import InfoDataStore from "./InfoDataStores";

const NewCard = () => {
    const { get, set, getAll } = useFormDataStore({});
    const onSubmit = () => console.log(getAll());

    return (
        <StoreContext.Provider value={ {get, set, getAll} }>
            <InfoDataStore>
                <Pagination onLast={ onSubmit }>
                    <SetDesign />
                    <SetOccasion />
                    <SetCollaborators />
                    <SetSendDetails />
                    <SetMessage />
                    <GetResults />
                </Pagination>
            </InfoDataStore>
        </StoreContext.Provider>
    )
}

export default NewCard;