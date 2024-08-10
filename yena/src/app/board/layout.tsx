import type {Metadata} from "next";
import { Providers } from "@/components/Providers";

import "../globalStyles/globals.scss";

export const metadata: Metadata = {
    title: "Yena Pet gang",
    description: "",
    openGraph: {
        title: "Yena Pet gang",
        description: "",
        type: "website",
        siteName: "Yena",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Providers>
            <>{children}</>
        </Providers>
    );
}