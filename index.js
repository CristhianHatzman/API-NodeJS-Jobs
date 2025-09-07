import Express from "express";
import mongoose from "mongoose";
import Film from "./models/Films.js";
const app = Express();
import filmRouter from "./routes/filmRouter.js";

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/films");
app.use("/", filmRouter);
const PORT = 3200;
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`API rodando localmente na porta http://localhost:${PORT}`);
});
