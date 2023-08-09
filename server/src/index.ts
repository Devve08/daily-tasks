import express from "express";
import dotenv from "dotenv";
import connectDB from "./db";
import bodyParser from "body-parser";
import authRoutes from "../routes/authRoutes";

import cors from "cors";

const app = express();
app.use(
  cors({
    origin: "*",
    methods: "GET, POST, PUT, Delete,PATCH",
  })
);
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB(process.env.MONGO_URI).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
});

app.use("/api/auth", authRoutes);

app.get("/", (req: any, res: any) => {
  res.send("Hello, World!");
});
