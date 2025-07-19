import express from "express";

import { getActivity } from "../../middlewares/reports.js";
import { loginUser } from "../../src/api/v1/controllers/loginController.js";



const router = express.Router();

router.post('/login', getActivity, loginUser )

export default router;