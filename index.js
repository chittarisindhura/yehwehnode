import express from "express";
import cors from "cors";
import connectDB from "./api/connectMongoDB.js";
import assesmentRoutes from "./routes/Assesments.js";
connectDB();
const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: "GET,PUT,POST,OPTIONS",
    // allowedHeaders: "Content-Type,Authorization",
  })
);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/assesment", assesmentRoutes);
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
