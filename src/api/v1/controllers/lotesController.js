import { getLotes } from "../models/lotesModel.js";

import { handleError } from "../utils/utils.js";


const getLotesId = async (req, res) => {
  
  const id = req.params 
  
  try {
    const lotes = await getLotes(id);
    
    res.status(200).json(lotes);
  } catch (error) {
    const errorFound = handleError(error.code) || [
      { status: 500, message: "Error interno del servidor" },
    ];
    return res
      .status(errorFound[0]?.status)
      .json({ error: errorFound[0]?.message });
  }
};


export {  getLotesId  }