import express from "express";
const JobRouter = express.Router();
import JobsController from "../controllers/jobController.js";

JobRouter.get("/jobs", JobsController.getAllJobs);
JobRouter.post("/jobs", JobsController.createJob);
JobRouter.delete("/jobs/:id", JobsController.deleteJob);
JobRouter.put("/jobs/:id", JobsController.UpdateJob);
JobRouter.get("/jobs/:id", JobsController.getOneJob);

export default JobRouter;
