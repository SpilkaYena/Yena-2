import dotenv from 'dotenv';

dotenv.config();

const config = {
    db: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
    server: {
        port: process.env.SERVER_PORT || 5000,
    },
};

export default config;