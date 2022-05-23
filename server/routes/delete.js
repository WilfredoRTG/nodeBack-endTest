import express from "express";
import { deleteData } from "../controllers/delete.js";

const deleteRouter = express.Router();

deleteRouter.get('/', deleteData)

export default deleteRouter;