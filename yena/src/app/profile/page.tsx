'use client'


import Sidebar from '@/components/Sidebar/Sidebar';
import Profile from '@/components/Profile/Profile';
export default function About() {
    return (
        <>
            <Sidebar/>
            <Profile userId={1} />
        </>
    );
}