import mongoose from "mongoose";
const AssesmentSchema = mongoose.Schema({
  assesmentId: { type: String },
  title: { type: String },
  type: { type: String },
  questionType: { type: String },
  questionBank: { type: String },
  multipleChoice: { type: Array },
  shortAnswer: { type: Array },
  essay: { type: Array },
  boolean: { type: Array },
});
export default mongoose.model("Assesment", AssesmentSchema);
