"use client";

import { SessionProvider } from "next-auth/react";

const NextAuthprovider = ({ children }) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    );
};

export default NextAuthprovider;