import { DataTypes } from 'sequelize';
import sequelize from '../db.js';
import User from './User.js';

const Project = sequelize.define('Project', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    creator_id: { type: DataTypes.INTEGER, references: { model: User, key: 'id' } },
    member_ids: { type: DataTypes.ARRAY(DataTypes.INTEGER) },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    description: { type: DataTypes.STRING(255), unique: true, allowNull: false },
    stack: { type: DataTypes.TEXT },
    status: { type: DataTypes.ENUM('active', 'pending', 'completed', 'archived'), allowNull: false },
    private: { type: DataTypes.BOOLEAN, defaultValue: false },
    accepted: { type: DataTypes.BOOLEAN, defaultValue: false }
});

export default Project;
