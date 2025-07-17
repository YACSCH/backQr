import express from "express";
import cors from "cors";
import { logger } from "logger-express";

import loginRoutes from "./config/routes/loginRoutes.js";
import lotesRoutes from "./config/routes/lotesRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;



app.use(express.json());

app.use(cors());

 app.use(logger());

app.use("/api/v1", loginRoutes);
app.use("/api/v1", lotesRoutes);

app.get("/", (req, res) => {
   const status = {
      'Status': 'Running...'
   };
   res.send(status);
}); 


app.listen(PORT, console.log(`¡Servidor encendido en el puerto! ${PORT}`));

export default app;