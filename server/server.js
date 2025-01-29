import express from 'express';
import dotenv from 'dotenv';
import sequelize from './db.js';
import userRoutes from './routes/userRoutes.js';
import credentialRoutes from './routes/credentialRoutes.js';
import technologyRoutes from './routes/technologyRoutes.js';
import projectRoutes from './routes/projectRoutes.js';

dotenv.config();
const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/credentials', credentialRoutes);
app.use('/api/technologies', technologyRoutes);
app.use('/api/projects', projectRoutes);

const PORT = process.env.SERVER_PORT || 5000;

sequelize.sync().then(() => {
    console.log("Database synced.");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.log("Error syncing database:", err));
