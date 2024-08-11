'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLang } from '../hooks/useLang';
import { useSession, signIn } from "next-auth/react";

import Button from '../components/Button/Button';
import { Google, Apple } from 'iconic-react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import styles from './page.module.scss';

export default function Home() {
    const { lang, translations } = useLang();
    const { data: session } = useSession();

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const x = useMotionValue(centerX);
    const y = useMotionValue(centerY);

    // Define the range for the rotation effect
    const rotateX = useTransform(y, [0, window.innerHeight], [20, -20]); // Inverted range for y
    const rotateY = useTransform(x, [0, window.innerWidth], [-20, 20]); // Inverted range for x

    const handleLogin = (provider: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        signIn(provider, { callbackUrl: "/board" });
    };

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            // Calculate mouse position relative to the center of the viewport
            const mouseX = event.clientX - centerX;
            const mouseY = event.clientY - centerY;

            // Update motion values with relative mouse position
            x.set(event.clientX);
            y.set(event.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [centerX, centerY, x, y]);

    return (
        <main className={styles.main}>
            <motion.div
                className={styles.centeredDiv}
                style={{
                    rotateX: rotateX,
                    rotateY: rotateY,
                }}
            >
                <h2 className={styles.welcomeText}>Welcome to Yena</h2>
                <p className={styles.placeholderText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className={styles.buttonWrapper}>
                    <Button variant="outlined" onClick={handleLogin("google")}>
                        <Google variant="Bold" /> Sign up with Google
                    </Button>
                    <Button variant="filled" onClick={''}>
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
