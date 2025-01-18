import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import router from "./routes/index.js";

dotenv.config();

const PORT = process.env.PORT ?? 5000;
const MONGODB_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.z38lg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(MONGODB_URI, {
    autoIndex: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .then(() => startSever())
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });

function startSever() {
  const app = express();

  app.use(cors());
  app.use(bodyParser.json());

  app.use("/", router);

  app.listen(PORT, () => {
    console.log(`server started on http://localhost:${PORT}`);
  });
}
