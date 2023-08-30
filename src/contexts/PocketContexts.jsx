import { useEffect, useState, createContext, useMemo, useCallback, useContext } from "react";
import PocketBase from 'pocketbase';

const BASE_URL = "http://127.0.0.1:8090";

const PocketContext = createContext({});

export const PocketProvider = ({ children }) => {
    const pb = useMemo(() => new PocketBase(BASE_URL), []);
    const [user, setUser] = useState(pb.authStore.model);

    useEffect(() => {
        return pb.authStore.onChange(model => setUser(model));
    },[])

    const register = useCallback(async (email, password) => {
        return await pb
            .collection("users")
            .create({ email, password, passwordConfirm: password });
    }, []);

    const login = useCallback(async (email, password) => {
        return await pb.collection("users").authWithPassword(email, password);
    }, []);

    const logout = useCallback(async () => {
        pb.authStore.clear();
    }, []);

    return(
        <PocketContext.Provider value={({ user, register, login, logout })}>
            {children}
        </PocketContext.Provider>
    )
};

export const usePocket = () => useContext(PocketContext);