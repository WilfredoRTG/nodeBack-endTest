import express from "express";
import { postData } from "../controllers/post.js";

const postRouter = express.Router();

postRouter.get('/', postData)

export default postRouter;