import React from 'react';
import styles from './page.module.scss';
import Link from 'next/link';

export default function Home() {
    return (
        <main className={styles.main}>
            <Link href="/auth">Почати шукати проект!</Link>
        </main>
    );
}