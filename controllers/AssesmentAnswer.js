import AssesmentAnswer from "../model/AssesmentAnswer.js";
export const sendAssesmentAnswers = async (req, res) => {
  const assesmentAnswersData = req.body;
  try {
    const sendAssesmentAnswerData = new AssesmentAnswer({
      ...assesmentAnswersData,
    });
    await sendAssesmentAnswerData.save();
    res.status(200).send("posted an assesment answer sucessfully");
  } catch (error) {
    console.log(error);
    res.status(404).send("error occurs");
  }
};
export const getAllAssesmentsAnswers = async (req, res) => {
  try {
    const assesmentAnswerList = await AssesmentAnswer.find().sort();
    res.status(200).json(assesmentAnswerList);
  } catch (error) {
    console.log(error);
    res.status(404).send("error");
  }
};
