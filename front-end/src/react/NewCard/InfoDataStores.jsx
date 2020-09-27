import React from "react";
import PropTypes from "prop-types";

import { DEFAULT_DESIGNS, DEFAULT_OCCASIONS } from "./Data";

export const DataStoreContext = React.createContext({});

const useDataStore = () => {

    const occasions = {
        
        getAll: () => {
            return new Promise((res) => {
                return res(DEFAULT_OCCASIONS);
            })
        },

        getById: (id) => {
            return new Promise((res, rej) => {
                try {
                    const [ result ] = DEFAULT_OCCASIONS.filter(item => item.id === id);
                    return res(result)
                } catch {
                    return rej({
                        message: "No such item found."
                    })
                }
            })
        }
    }

    const designs = {
        getAll: () => {
            return new Promise((res) => {
                return res(DEFAULT_DESIGNS);
            })
        },
        getById: (id) => {
            return new Promise((res, rej) => {
                try {
                    const [ result ] = DEFAULT_DESIGNS.filter(item => item.id === id);
                    return res(result)
                } catch {
                    return rej({
                        message: "No such item found."
                    })
                }
            })
        }
    }

    return {
        occasions,
        designs
    }
}

const InfoDataStore = ({ children }) => {
    const { designs, occasions } = useDataStore();
    
    return (
        <DataStoreContext.Provider value={ { designs, occasions } }>
            { children }
        </DataStoreContext.Provider>
    )
}

InfoDataStore.propTypes = {
    children: PropTypes.oneOf([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ])
}

export default InfoDataStore;