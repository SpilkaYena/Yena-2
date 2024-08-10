import ".//globalStyles/globals.scss";
import { Providers } from "@/components/Providers";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Providers>
            <html lang="en">
            <body>{children}</body>
            </html>
        </Providers>
    );
}
