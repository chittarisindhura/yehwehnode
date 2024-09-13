import Assesments from "../model/Assesments.js";
export const createAssesment = async (req, res) => {
  const AssesmentData = req.body;
  const sendAssesment = new Assesments({ ...AssesmentData });
  console.log(AssesmentData);
  try {
    await sendAssesment.save();
    res.status(200).send("Posted an Assesment successfully");
  } catch (error) {
    console.log(error);
    res.status(409).send("Couldn't post a new question");
  }
};
export const getAllAssesments = async (req, res) => {
  try {
    const assesmentsList = await Assesments.find().sort();
    res.status(200).json(assesmentsList);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
