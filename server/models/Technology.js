import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Technology = sequelize.define('Technology', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false }
}, {
    timestamps: false
});
export default Technology;
