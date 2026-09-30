import express from "express";
import router from "./src/router/marca.js";
const app = express();
app.use(express.json());
app.use("/api", router);

app.listen(3000, () => {
  console.log("Servidor está rodando na porta 3000");
});