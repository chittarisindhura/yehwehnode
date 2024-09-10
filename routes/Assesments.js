import express from "express";
import {
  createAssesment,
  getAllAssesments,
} from "../controllers/Assesments.js";
import {
  sendAssesmentAnswers,
  getAllAssesmentsAnswers,
} from "../controllers/AssesmentAnswer.js";
const router = express.Router();
router.post("/create", createAssesment);
router.get("/get", getAllAssesments);
router.get("/getAnswers", getAllAssesmentsAnswers);
router.post("/sendAssesmentAnswer", sendAssesmentAnswers);
export default router;
