
import { sequelize } from "./models";
import { User } from "./models"; // adjust if path differs
import bcrypt from "bcrypt";

async function seed() {
  try {
    await sequelize.sync();

    const hash = await bcrypt.hash("admin123", 10);

    await User.create({
      name: "Admin",
      email: "admin@gmail.com",
      password: hash,
      role: "superadmin",
      isActive: true,
    });

    console.log("✅ SuperAdmin created");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();