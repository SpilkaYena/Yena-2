"use client";

import { useEffect, useState } from 'react';

export default function Database() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/api/fetch-data');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <h1>Data from Database</h1>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.your_column_name}</li>
                ))}
            </ul>
        </div>
    );
}
