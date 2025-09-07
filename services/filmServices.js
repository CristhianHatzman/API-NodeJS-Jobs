import Film from "../models/Films.js";

class filmeService {
  async getAll() {
    try {
      const films = await Film.find();
      return films;
    } catch (error) {
      console.log(error);
    }
  }

  async createFilm(name, year, duration, director, genre) {
    try {
      const newFilm = new Film({
        name,
        year,
        duration,
        director,
        genre,
      });
      await newFilm.save();
    } catch (error) {
      console.log(error);
    }
  }
}

export default new filmeService();
