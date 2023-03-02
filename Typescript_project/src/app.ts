import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import adminRoute from "./routes/adminRoute";

import connection from "./db/dbConfig";
connection();

import * as dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());
app.use(helmet());

app.use("/admin", adminRoute);

app.listen(process.env.PORT, () => {
    console.log(`server is running on http://localhost:${process.env.PORT}`)
})