import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    google_user_id: { type: DataTypes.STRING, unique: true, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    profile_picture: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING(255) },
    stack: { type: DataTypes.ARRAY(DataTypes.INTEGER) },
    linkedin: { type: DataTypes.STRING(2048) },
    telegram: { type: DataTypes.STRING(2048) },
    github: { type: DataTypes.STRING(2048) },
    reddit: { type: DataTypes.STRING(2048) },
    facebook: { type: DataTypes.STRING(2048) }
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

export default User;
