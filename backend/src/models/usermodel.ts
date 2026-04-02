import { DataTypes } from "sequelize";
import { sequelize } from "../config/db"

export const User = sequelize.define("User", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.ENUM("admin", "superadmin") },
  isActive: { type: DataTypes.BOOLEAN, defaultValue: true },
},{
  timestamps: false 
});