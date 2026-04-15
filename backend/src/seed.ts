import { sequelize } from "./models";
import { User } from "./models"; // adjust if path differs
import bcrypt from "bcrypt";

async function seed() {
  // try {
  //   await sequelize.sync();

  //   const hash = await bcrypt.hash("admin123", 10);

  //   await User.create({
  //     name: "Super Admin",
  //     email: "admin@gmail.com",
  //     password: hash,
  //     role: "superadmin",
  //     isActive: true,
  //   });


  //   console.log(" SuperAdmin created");
  //   process.exit();
  // } catch (err) {
  //   console.error(err);
  //   process.exit(1);
  //


  // try {
  //   await sequelize.authenticate();
  //   console.log("DB connected");

  //   await sequelize.sync({ alter: true }); 
  //   // or use { force: true } for fresh start

  //   console.log("Tables created");

  // } catch (err) {
  //   console.error("Error:", err);
  // }
}

seed();