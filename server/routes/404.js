import express from "express";
import { get404 } from "../controllers/404.js";

const router404 = express.Router();

router404.get('/', get404)

export default router404;