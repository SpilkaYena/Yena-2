'use client'

import { Providers } from "@/components/Providers";
import type {Metadata} from "next";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Providers>
            {children}
        </Providers>
    );
}