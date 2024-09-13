import mongoose from "mongoose";
const AssesmentSchema = mongoose.Schema({
  title: { type: String },
  type: { type: String },
  questionBank: { type: String },
  multipleChoice: { type: Array },
  shortAnswer: { type: Array },
  essay: { type: Array },
  boolean: { type: Array },
});
export default mongoose.model("Assesment", AssesmentSchema);
