import React, { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {

    const lsUser = JSON.parse(localStorage.getItem("user"));
    const defaultUser = lsUser || {};
    const [name, setName] = useState(defaultUser.name || '');
    const [token, setToken] = useState(defaultUser.token || '');
    const [id, setId] = useState('');
    const [login, setLogin] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    
    useEffect(() => {
        if (lsUser === null && (location.pathname !== "/signup" || location.pathname !== "/signin")) {
            navigate("/");
        } else if (lsUser && location.pathname !== "/signup") {
            setLogin(true);
            navigate("/me");
        } 
    }, [])
    return (
        <AuthContext.Provider value={{
            name, setName,
            token, setToken,
            id, setId,
            login, setLogin
        }}>
            {children}
        </AuthContext.Provider>
    )
}