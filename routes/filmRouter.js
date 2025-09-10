import express from "express";
const filmRouter = express.Router();
import filmController from "../controllers/filmController.js";

filmRouter.get("/filmes", filmController.getAllFilms);
filmRouter.post("/filmes", filmController.createFilm);
filmRouter.delete("/filmes/:id", filmController.deleteFilm);

export default filmRouter;
