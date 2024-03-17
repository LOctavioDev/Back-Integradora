import express from "express";
import morgan from "morgan";

const app = express();
app.use(morgan("dev"));
import generalRoutes from "./routes/general.Routes.js";
import userRoutes from "./routes/user.Routes.js";
import frontRoutes from "./routes/routesFront/front.Routes.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/consults/', frontRoutes);
app.use('/api/sensors', generalRoutes);
app.use('/api/users', userRoutes)


export default app;