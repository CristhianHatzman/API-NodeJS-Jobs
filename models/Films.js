import mongoose from "mongoose";

const filmSchema = new mongoose.Schema({
  name: String,
  year: Number,
  duration: String,
  director: String,
  genre: String,
});

const Film = mongoose.model("Film", filmSchema);

export default Film;
