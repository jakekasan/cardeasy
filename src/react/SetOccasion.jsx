import React, {useContext, useState, useEffect} from "react";

import { StoreContext } from "./FormDataStore";
import { PaginationContext } from "./Pagination";
import SelectableList from "./SelectableList";

const SetOccasion = () => {
    const { get, set } = useContext(StoreContext);
    const { goNext, currentPage } = useContext(PaginationContext);
    const occasions = ["Birthday", "Anniversary", "Moved house", "Graduated", "Christmas"].map((item, i) => { return {id: i, text: item}})

    const title = `Step ${currentPage + 1}: Select an occasion:`
    return (
        <SelectableList
            initialValueGetter={ () => get("occasion") }
            finalValueSetter={ (finalValue) => set("occasion", finalValue) }
            options={ occasions }
            finalStep={ goNext }
            title={ title }/>
    )
}


export default SetOccasion;