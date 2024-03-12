import express from "express";
const app = express();
import generalRoutes from "./routes/general.Routes.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/sensors', generalRoutes);


export default app;