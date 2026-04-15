import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";
import { User } from "./usermodel";

export const Post = sequelize.define("Post", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },

  authorId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  title: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.TEXT, allowNull: false },
  category: {
  type: DataTypes.ENUM(
    "tech",
    "health",
    "lifestyle",
    "finance",
    "education",
    "sports",
    "travel",
    "food",
    "business",
    "entertainment"
  ),
  allowNull: false
},

  status: {
    type: DataTypes.ENUM("draft", "published"),
    defaultValue: "draft"
  }
}, {
  timestamps: true
});

User.hasMany(Post, { foreignKey: "authorId" });
Post.belongsTo(User, { foreignKey: "authorId" });