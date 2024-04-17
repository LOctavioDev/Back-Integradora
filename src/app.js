import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();
app.use(morgan("dev"));
app.use(cors());
import generalRoutes from "./routes/general.Routes.js";
import frontRoutes from "./routes/routesFront/front.Routes.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/consults/', frontRoutes);
app.use('/api/sensors/', generalRoutes);


export default app;