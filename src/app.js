import express from "express";
const app = express();
import generalRoutes from "./routes/general.Routes.js";
import userRoutes from "./routes/user.Routes.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/sensors', generalRoutes);
app.use('/api/users', userRoutes)


export default app;