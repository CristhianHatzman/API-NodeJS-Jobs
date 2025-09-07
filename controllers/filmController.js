import filmServices from "../services/filmServices.js";

const getAllFilms = async (req, res) => {
  try {
    const films = await filmServices.getAll();
    res.status(200).json({ films: films });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Erro interno no servidor." });
  }
};

const createFilm = async (req, res) => {
  try {
    const { name, year, duration, director, genre } = req.body;
    await filmServices.createFilm(name, year, duration, director, genre);
    res.status(201).send({ message: "Filme criado com sucesso!" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Erro interno no servidor." });
  }
};
export default { getAllFilms, createFilm };
