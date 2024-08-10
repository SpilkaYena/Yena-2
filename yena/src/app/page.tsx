'use client'

import Image from "next/image";
import Link from 'next/link';
import { useLang } from '../hooks/useLang';
import { useSession, signIn, signOut } from "next-auth/react";

import ".//globalStyles/globals.scss";


export default function Home() {
    const { lang, translations } = useLang();
    const { data: session } = useSession();

    const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        signIn("google", { callbackUrl: "/" });
    };

    const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        signOut({ callbackUrl: "/" });
    };

    return (
        <main>
            <form>
                <div>
                    <div>
                        <h2>
                            {translations[lang].login.h1}
                        </h2>
                    </div>
                    <button onClick={handleLogin}>
                        {translations[lang].login.button}
                    </button>

                    {session && (
                        <>
                            <p>{session.user?.name}</p>
                            <img src={session.user?.image || ''} alt="User image" />
                            <button onClick={handleLogout}>
                                Sign Out
                            </button>
                        </>
                    )}
                </div>
            </form>
        </main>
    );
}
