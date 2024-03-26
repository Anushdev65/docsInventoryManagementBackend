import { model } from "mongoose";
import candidateInfoSchema from "./schemas/candidateInfoSchema.js";
import associatedCompanySchema from "./schemas/associatecCompanySchema.js";

export const CandidateInfo = model("CandidateInfo", candidateInfoSchema);
export const AssociatedCompany = model(
  "AssociatedCompany",
  associatedCompanySchema
);
