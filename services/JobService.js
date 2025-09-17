import Job from "../models/Job.js";

class jobService {
  async GetAll() {
    try {
      const jobs = await Job.find();
      return jobs;
    } catch (error) {
      console.log(error);
    }
  }

  async CreateJob(
    title,
    seniority,
    company,
    type,
    location,
    salary,
    description,
    jobFunction,
    requirements
  ) {
    try {
      const newJob = new Job({
        title,
        seniority,
        company,
        type,
        location,
        salary,
        description,
        jobFunction,
        requirements,
      });
      await newJob.save();
    } catch (error) {
      console.log(error);
    }
  }

  async DeleteJob(id) {
    try {
      const deletedJob = await Job.findByIdAndDelete(id);
      return deletedJob;
    } catch (error) {
      console.log(error);
    }
  }

  async UpdateJob(
    id,
    title,
    seniority,
    company,
    type,
    location,
    salary,
    description,
    jobFunction,
    requirements
  ) {
    try {
      const updatedJob = await Job.findByIdAndUpdate(
        id,
        {
          title,
          seniority,
          company,
          type,
          location,
          salary,
          description,
          jobFunction,
          requirements,
        },
        { new: true }
      );
      return updatedJob;
    } catch (error) {
      console.log(error);
    }
  }

  async GetOne(id) {
    try {
      const job = await Job.findById(id);
      return job;
    } catch (error) {
      console.log(error);
    }
  }
}
export default new jobService();
