import { usePocket } from "../contexts/PocketContexts";
import Login from "./login/Login";
import Home from "./home/Home";

export const RequireAuth = () => {
    const { user } = usePocket();
   
    return user ? (
        <Home />
    ) : (
        <Login />
    )
}

export default RequireAuth;