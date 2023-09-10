import { usePocket } from "../contexts/PocketContexts";
import Login from "./login/Login";

import Home from "./home/Home";
import React from "react";



export const RequireAuth = () => {
    const { user } = usePocket();
   
    return user ? (

        <Home />

    ) : (
        <Login />

    )
}

export default RequireAuth;