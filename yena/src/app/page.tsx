'use client'

import Image from "next/image";
import Link from 'next/link';
import { useLang } from '../hooks/useLang';


export default function Home() {
    const { lang, translations } = useLang()


    return (
        <main>
            <form>
                <div>
                    <div>
                        <h2>
                            {translations[lang].login.h1}
                        </h2>
                    </div>
                    <Link href="board" passHref={true} legacyBehavior={true}>
                        <a>
                            {translations[lang].login.button}
                        </a>
                    </Link>
                </div>
            </form>
        </main>
    );
}
