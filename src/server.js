import express from 'express';
import mongoose from "mongoose";
import pkg from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';


const {json,urlencoded} = pkg;
const app = express();
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());
const mongodbAPI = "mongodb+srv://robinmandhotia:Robin123@rabincluster.ukgzcqb.mongodb.net/ecommerce?retryWrites=true&w=majority";
mongoose.connect(mongodbAPI);

import UserRoutes from "./routes/user_routes";
app.use("/api/user", UserRoutes);
const PORT = 5000;
app.listen(PORT, () => console.log('Server Started at PORT:', PORT));

