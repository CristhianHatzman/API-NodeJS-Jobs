import { ObjectId } from "mongodb";
import filmServices from "../services/filmServices.js";

const getAllFilms = async (req, res) => {
  try {
    const films = await filmServices.GetAll();
    res.status(200).json({ films: films });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Erro interno no servidor." });
  }
};

const createFilm = async (req, res) => {
  try {
    const { name, year, duration, director, genre } = req.body;
    await filmServices.CreateFilm(name, year, duration, director, genre);
    res.status(201).send({ message: "Filme criado com sucesso!" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Erro interno no servidor." });
  }
};

const deleteFilm = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params;
      const deletedFilm = await filmServices.DeleteFilm(id);
      if (deletedFilm) {
        res.status(200).send({ message: "Filme deletado com sucesso!" });
      } else {
        res.status(404).send({ error: "Filme não encontrado." });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Erro interno no servidor." });
  }
};

export default { getAllFilms, createFilm, deleteFilm };
