import tryCatchWrapper from "../middleware/tryCatchWrapper.js";
import { HttpStatus } from "../constant/constant.js";
import successResponseData from "../helper/successResponseData.js";
import { candidateInfoService } from "../services/index.js";

export const createCandidateInfo = tryCatchWrapper(async (req, res) => {
  let body = { ...req.body };

  let data = await candidateInfoService.createCandidateInfoService({
    body: body,
  });

  successResponseData({
    res,
    message: "Candidate information created successfully",
    statusCode: HttpStatus.CREATED,
    data,
  });
});

export const readAllCandidateInfo = tryCatchWrapper(async (req, res, next) => {
  let find = {};

  req.find = find;

  req.service = candidateInfoService.readAllCandidateInfoService;

  next();
});

export const readSpecificCandidateInfo = tryCatchWrapper(async (req, res) => {
  let id = req.params.id;

  let data = await candidateInfoService.readSpecificCandidateInfoService({
    id,
  });

  successResponseData({
    res,
    message: "Data read sucessfully",
    statusCode: HttpStatus.OK,
    data,
  });
});

export const updateCandidateInfo = tryCatchWrapper(async (req, res) => {
  let body = { ...req.body };
  let id = req.params.id;

  let data = await candidateInfoService.updateCandidateInfoService({
    id,
    body,
  });

  successResponseData({
    res,
    message: "Data updated sucessfully",
    statusCode: HttpStatus.CREATED,
    data,
  });
});

export const deleteSpecificCandidateInfo = tryCatchWrapper(async (req, res) => {
  let id = req.params.id;
  let data = await candidateInfoService.deleteSpecificCandidateInfoService({
    id,
  });

  successResponseData({
    res,
    message: "Data deleted sucessfully",
    statusCode: HttpStatus.OK,
    data,
  });
});
