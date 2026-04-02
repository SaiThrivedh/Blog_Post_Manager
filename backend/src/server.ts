import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import { sequelize } from "./models";
import authRoutes from "./routes/authroutes";
import postRoutes from "./routes/postroutes";
import userRoutes from "./routes/userroutes";


dotenv.config()
const app = express();
app.use(express.json());
app.use(cors())


app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT||5000



sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  });
});