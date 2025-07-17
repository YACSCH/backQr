import express from "express";

import { getLotesId       
 } from "../../src/api/v1/controllers/lotesController.js";

import { getActivity } from "../../middlewares/reports.js";

import { isLogin } from "../../middlewares/isLogin.js"


const router = express.Router();


router.get("/lotes:id",isLogin, getActivity, getLotesId )


export default router;