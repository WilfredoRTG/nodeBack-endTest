import express from "express";
import { getData } from "../controllers/query.js";

const queryRouter = express.Router();

queryRouter.get('/', getData)

export default queryRouter;