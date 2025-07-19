import Joi from "joi";

//USER
export const email = Joi.string().email().max(255).required();
export const password = Joi.string().max(10).required();


