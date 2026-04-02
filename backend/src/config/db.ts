import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "blog_post_manager",
  "root",
  "admin",
  {
    host: "localhost",
    dialect: "mysql",
  }
);

