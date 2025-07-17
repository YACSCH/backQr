import pool from "../../../../config/db/conectionDb.js";


const getLotes = async ({ id }) => {
  const SQLquery = {
    text: `SELECT * from lotesqr WHERE lote = $1`,
    values: [id],
  };

  const response = await pool.query(SQLquery);
  return response.rows[0];
};


export {   getLotes };
