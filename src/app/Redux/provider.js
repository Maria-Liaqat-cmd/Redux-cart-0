"use client"

import React from "react";
import {provider} from  'react-redux'
import { store } from "./store";

const provider = ({ children }) => {
    return(
        <provider store={store}>
            {children}
        </provider>
    )
};
 export default provider