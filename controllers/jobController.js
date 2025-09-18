import { ObjectId } from "mongodb";
import JobService from "../services/JobService.js";

const getAllJobs = async (req, res) => {
  try {
    const jobs = await JobService.GetAll();
    res.status(200).json({ jobs: jobs });
    // Cód. 200: OK - A solicitação foi bem-sucedida.
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Erro interno no servidor." });
    // Cód. 500: Erro Interno do Servidor - Ocorreu um erro no servidor ao processar a solicitação.
  }
};

const createJob = async (req, res) => {
  try {
    const {
      title,
      seniority,
      company,
      type,
      location,
      salary,
      description,
      jobFunction,
      requirements,
    } = req.body;
    await JobService.CreateJob(
      title,
      seniority,
      company,
      type,
      location,
      salary,
      description,
      jobFunction,
      requirements
    );
    res.status(201).send({ message: "Job criado com Sucesso!" });
    // Cód. 201: Created - A solicitação foi bem-sucedida e um novo recurso foi criado como resultado.
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Erro interno no servidor." });
  }
};

const deleteJob = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params;
      const deletedJob = await JobService.DeleteJob(id);
      if (deletedJob) {
        res.status(200).send({ message: "Job deletado com sucesso!" });
      } else {
        res.status(404).send({ error: "Job não encontrado." });
        // Cód. 404: Not Found - O recurso solicitado não foi encontrado.
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Erro interno no servidor." });
  }
};

const UpdateJob = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const {
        title,
        seniority,
        company,
        type,
        location,
        salary,
        description,
        jobFunction,
        requirements,
      } = req.body;
      const updatedJob = await JobService.updatedJob(
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
      );
      if (updatedJob) {
        res.status(200).send({ message: "Job atualizado com sucesso!" });
      } else {
        res.status(404).send({ error: "Job não encontrado." });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Erro interno no servidor." });
  }
};

const getOneJob = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const job = await JobService.GetOne(id);
      if (job) {
        res.status(200).json({ job: job });
      } else {
        res.status(404).json({ error: "Job não encontrado." });
      }
    } else {
      res.status(400).json({ error: "ID inválido." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno no servidor." });
  }
};

export default { getAllJobs, createJob, deleteJob, UpdateJob, getOneJob };
