'use client'

import { SessionProvider } from "next-auth/react";
import LoadingAnimation from "@/components/LoadingAnimation/LoadingAnimation";
import {useEffect, useState} from "react";

export const Providers = ({ children }: { children: React.ReactNode }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <SessionProvider>
            {loading ? <LoadingAnimation /> : children}
        </SessionProvider>
    );
};