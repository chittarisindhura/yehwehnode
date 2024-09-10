import mongoose from "mongoose";
const AssesmentAnswerSchema = mongoose.Schema({
  title: { type: String },
  type: { type: String },
  multipleChoiceAnswer: { type: Array },
  shortAnswer: { type: Array },
  essayAnswer: { type: Array },
  booleanAnswer: { type: Array },
});
export default mongoose.model("AssesmentAnswer", AssesmentAnswerSchema);
