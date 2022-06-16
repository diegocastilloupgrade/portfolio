const express = require('express');
const dotenv = require('dotenv');
//cors
const cors = require('cors');

//Importamos los routers
const worksRouter = require("./src/api/routers/works.routes");
const companiesRouter = require("./src/api/routers/companies.routes");

const { connect } = require('./src/utils/database');

dotenv.config();

const server = express();

//Gracias a estas dos lineas mi servidor puede codificar y leer la info en json.
server.use(express.json());
server.use(express.urlencoded({ extended: true}));

//Nos conectamos a la BBDD
connect();

//Configuramos los headers
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

//Configuramos las cors. Aqui definimos quien puede hacer peticiones a mi servidor.
server.use(cors({
    //origin: ["htt://localhost:5000", "http://localhost:8000, ..."],
    origin: "*",
    credentials: true
}))

//Definimos las rutas padre
server.use("/works", worksRouter)
server.use("/companies", companiesRouter)

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
