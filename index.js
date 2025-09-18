import Express from "express";
const app = Express();
import mongoose from "mongoose";

import Job from "./models/Job.js";
import JobRouter from "./routes/jobRouter.js";

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/jobs"); // Conexão com o MongoDB localmente.

app.use("/", JobRouter);

const PORT = 3200; // Definição da porta que a API irá rodar.

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`API rodando localmente na porta http://localhost:${PORT}`);
});
