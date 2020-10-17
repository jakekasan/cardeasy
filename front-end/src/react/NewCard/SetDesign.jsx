import React, { useContext, useEffect, useState } from "react";
import {StoreContext} from "./FormDataStore";
import { DataStoreContext } from "./InfoDataStores";
import {PaginationContext} from "./Pagination";
import SelectableList from "./SelectableList";

// const DEFAULT_DESIGNS = [
//     "CLASSIC",
//     "VINTAGE",
//     "FUTURISTIC",
//     "BLUE",
//     "RED",
//     "PURPLE",
//     "PINK",
//     "TURQUOISE"
// ]

const SetDesign = () => {
    const { get, set } = useContext(StoreContext);
    const { designs: getAll } = useContext(DataStoreContext);
    const { goNext, currentPage } = useContext(PaginationContext);
    //const designs = DEFAULT_DESIGNS.map((item, i) => { return {id: i, text: item}})
    const [designs, setDesigns] = useState([]);

    useEffect(() => {
        getAll()
            .then(data => setDesigns(data))
    });

    const title = `Step ${currentPage + 1}: Select a design:`
    return (
        <SelectableList
            initialValueGetter={ () => get("design") }
            finalValueSetter={ (finalValue) => set("design", finalValue) }
            options={ designs }
            finalStep={ () => goNext() }
            title={ title }/>
    )
}

export default SetDesign;