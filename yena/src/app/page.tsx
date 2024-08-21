'use client';

import React from 'react';
import Link from 'next/link';
import { useLang } from '../hooks/useLang';
import { useSession, signIn } from "next-auth/react";

import Button from '../components/Button/Button';
import { Google, Apple } from 'iconic-react';
import { motion } from 'framer-motion';
import styles from './page.module.scss';

export default function Home() {
    const { lang, translations } = useLang();
    const { data: session } = useSession();


    const handleLogin = (provider: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        signIn(provider, { callbackUrl: "/board" });
    };

    return (
        <main className={styles.main}>
            <motion.div
                className={styles.centeredDiv}
            >
                <h2 className={styles.welcomeText}>Welcome to Yena</h2>
                <p className={styles.placeholderText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className={styles.buttonWrapper}>
                    <Button variant="outlined" onClick={handleLogin("google")}>
                        <Google variant="Bold" /> Sign up with Google
                    </Button>
                    <Button variant="filled" onClick={() => console.log('clicked Apple')}>
                        <Apple variant="Bold"/> Sign up with Apple
                    </Button>
                </div>
                <p className={styles.agreementText}>
                    By registration you agree to <Link href="/terms">Terms of Use</Link> and <Link href="/privacy">Privacy Policy</Link>.
                </p>
            </motion.div>
        </main>
    );
}
