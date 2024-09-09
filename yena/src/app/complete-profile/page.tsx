'use client';

import React from 'react';
import { useLang } from '@/hooks/useLang';
import { useSession } from 'next-auth/react';
import CompleteProfileForm from '@/components/ProfileSetup/ProfileSetup';
import styles from '../page.module.scss';

export default function AuthPage() {
    const { lang, translations } = useLang();
    const { data: session } = useSession();

    const handleLogin = (provider: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        signIn(provider, { callbackUrl: "/board" });
    };

    return (
        <main className={styles.main}>
            <CompleteProfileForm/>
        </main>
    );
}