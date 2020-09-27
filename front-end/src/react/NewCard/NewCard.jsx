import React from "react";

import { Pagination } from "./Pagination";
import { useFormDataStore, StoreContext} from "./FormDataStore";
import SetSender from "./SetSender";
import SetOccasion from "./SetOccasion";
import SetDesign from "./SetDesign";
import SetCollaborators from "./SetCollaborators";
import SetMessage from "./SetMessage";
import SetSendDetails from "./SetSendDetails";
import GetResults from "./GetResults";
import InfoDataStore from "./InfoDataStores";
import SetRecipient from "./SetRecipient";

const NewCard = () => {
    const { get, set, getAll } = useFormDataStore({});
    const onSubmit = () => console.log(getAll());

    return (
        <StoreContext.Provider value={ {get, set, getAll} }>
            <InfoDataStore>
                <Pagination onLast={ onSubmit }>
                    <SetSender />
                    <SetRecipient />
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