import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import rutas from "./routes/rutas.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

const uri = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3000;

mongoose
  .connect(uri)
  .then(() => console.log("✅ Conectado a MongoDB Atlas"))
  .catch((err) => console.error("❌ Error al conectar a MongoDB:", err));

app.use("/", rutas);

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en: http://localhost:${PORT}`);
});
