import { DataTypes } from 'sequelize';
import sequelize from '../db.js';
import User from './User.js';

const Credential = sequelize.define('Credential', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: User, key: 'id' } },
    access_token: { type: DataTypes.STRING(255), allowNull: false },
    refresh_token: { type: DataTypes.STRING(255), allowNull: false },
    token_expiry: { type: DataTypes.DATE, allowNull: false }
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

export default Credential;
