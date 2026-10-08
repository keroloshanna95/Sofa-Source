import express from "express";
import "./config/env.js";
import cors from "cors";
import helmet from "helmet";
import { rateLimit } from "express-rate-limit";
import userRouter from "./modules/users/user.routes.js";

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
  })
);

app.use("/api/v1", userRouter);

export default app;