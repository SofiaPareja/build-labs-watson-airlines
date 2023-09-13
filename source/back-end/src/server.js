const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./docs/openapi-spec.json'); // Reemplaza con la ubicación de tu archivo de especificación

const path = require("path");

const cors = require('cors')
const { getAirlines, getAirlineById } = require('./airlines.controller'); // Importa los controladores
const { getFlightById, getFlights } = require('./flights.controller');

const app = express();
var corsOptions = {
    origin: ['http://localhost:8080'],
    optionsSuccessStatus: 200,
    methods: 'GET, PUT, POST, DELETE',
}


async function main() {

    // Get global variables from .env file
    require("dotenv").config({ path: path.resolve(__dirname, ".env") });

    // Connect to database
    const { create_connection } = require("./airlines.mongodb");

    await create_connection();

    app.use(cors(corsOptions))

    app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))


    app.get('/api/airlines', getAirlines);
    app.get('/api/airlines/:id', getAirlineById);
    app.get('/api/flights/:id', getFlightById);
    app.get('/api/flights', getFlights);

    const PORT = process.env.PORT || 8080;

    app.listen(PORT, () => {
        console.log(`Servidor en ejecución en el puerto ${PORT}`);
    });



}

main();

