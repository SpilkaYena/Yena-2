'use client'

import React, { useState } from 'react';

import dynamic from "next/dynamic";
import Sidebar from '@/components/Sidebar/Sidebar';
import LoadingAnimation from "@/components/LoadingAnimation/LoadingAnimation";
import Dashboard from "@/components/Dashboard/Dashboard";
import Test from "@/components/Test";

import styles from './page.module.scss';

const DashboardComponent = dynamic(() => import('@/components/Dashboard/Dashboard'), {
    loading: () => <LoadingAnimation />,
});

export default function BoardPage() {
    return (
        <div className={styles.boardPageContainer}>
            <Sidebar/>
            <Dashboard/>
        </div>
    );
}