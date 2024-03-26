import { Router } from "express";

import validation from "../middleware/validation.js";
import { sortFilterPagination } from "../middleware/sortSelectPage.js";
import { candidateInfoController } from "../controllers/index.js";

export const candidateInfoRouter = Router();

candidateInfoRouter
  .route("/")
  .post(candidateInfoController.createCandidateInfo)
  .get(candidateInfoController.readAllCandidateInfo, sortFilterPagination)
  .patch(candidateInfoController.updateCandidateInfo);

candidateInfoRouter
  .route("/:id")
  .get(candidateInfoController.readSpecificCandidateInfo)
  .delete(candidateInfoController.deleteSpecificCandidateInfo);
