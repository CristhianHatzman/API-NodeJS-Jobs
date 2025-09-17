import mongoose from "mongoose";

const requirementSchema = new mongoose.Schema({
  skill: String,
  experience: String,
});

const jobsSchema = new mongoose.Schema({
  title: String,
  seniority: String,
  company: String,
  type: String,
  location: String,
  salary: Number,
  description: String,
  jobFunction: String,
  requirements: [requirementSchema],
});

const Job = mongoose.model("Job", jobsSchema);

export default Job;
