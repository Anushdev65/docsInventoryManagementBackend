import { CandidateInfo } from "../schemasModel/model.js";

export const createCandidateInfoService = async ({ body }) =>
  CandidateInfo.create(body);

export const readAllCandidateInfoService = async ({
  find = {},
  sort = "",
  limit = "",
  skip = "",
  select = "",
}) =>
  CandidateInfo.find(find).sort(sort).limit(limit).skip(skip).select(select);

export const readSpecificCandidateInfoService = async ({ id }) =>
  await CandidateInfo.findById(id);

export const updateCandidateInfoService = async ({ body, id }) =>
  await CandidateInfo.findByIdAndUpdate(id, body, {
    new: true,
    runValidators: true,
  });

export const deleteSpecificCandidateInfoService = async ({ id }) =>
  await CandidateInfo.findByIdAndDelete(id);
