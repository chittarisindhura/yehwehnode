import express from "express";
import cors from "cors";
import connectDB from "./connectMongoDB.js";
import assesmentRoutes from "./routes/Assesments.js";
connectDB();
const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assesment", assesmentRoutes);
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
