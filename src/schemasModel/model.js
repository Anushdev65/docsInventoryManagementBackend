import { model } from "mongoose";
import candidateInfoSchema from "./schemas/candidateInfoSchema.js";

export const CandidateInfo = model("CandidateInfo", candidateInfoSchema);
