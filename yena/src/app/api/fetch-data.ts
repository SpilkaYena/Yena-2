import type { NextApiRequest, NextApiResponse } from 'next';
import { query } from '@/utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const result = await query('SELECT * FROM табличка йоу', []);
        res.status(200).json(result);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Error fetching data' });
    }
}
