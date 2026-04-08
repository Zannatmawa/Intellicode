"use client";

import { SessionProvider, useSession } from "next-auth/react";
import { createContext, useContext, useState, useEffect } from "react";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const { data: session, status } = useSession();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsLoggedIn(status === "authenticated");
    }, [status]);

    return (
        <AuthContext.Provider value={{ isLoggedIn, session }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

const NextAuthProvider = ({ children }) => {
    return (
        <SessionProvider>
            <AuthProvider>{children}</AuthProvider>
        </SessionProvider>
    );
};

export default NextAuthProvider;