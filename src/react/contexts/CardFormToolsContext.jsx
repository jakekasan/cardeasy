import React from "react";

export const CardFormContext = React.createContext({test: () => {
    console.log("This is a context function");
}});