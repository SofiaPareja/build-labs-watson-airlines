const { request, response } = require("express");

// Mongoose Schemas
const Flight = require("./flights.schema");

/**
 * Sample Controller
 * @param {JSON} req request information
 * @param {JSON} res response information
 * @returns {JSON} return description
 */
const getFlights = async (req = request, res = response) => {
    // Returns list of Sample objects under "result" field
    /*#swagger.responses[200] = {
        "description": "OK",
        "content": {
            "application/json": {
                "schema": {
                    "type": "object",
                    "properties": {
                        "result": {
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/Flights"
                            }
                        }
                    }
                }
            }
        }
    }*/

    try {
        // Your Code Goes Here!!!!
        const result = await Flight.find({}); // Replace with actual Mongoose queries
        console.log(result)
        if (!result) {
            // If airline with the given ID is not found, return a 404 response
            return res.status(404).json({ error: 'Flights not found' });
        }
        // Return query result
        res.json({
            result: result
        });
    } catch (error) {
        res.json({
            status: error.status
        });
    }
};

/**
 * Sample Controller for Flights
 * @param {JSON} req request information
 * @param {JSON} res response information
 * @returns {JSON} return description
 */
const getFlightByDepartureDate = async (req = request, res = response) => {
    const { departure, origin, destination } = req.params
    // Returns list of Sample objects under "result" field
    /*#swagger.responses[200] = {
        "description": "OK",
        "content": {
            "application/json": {
                "schema": {
                    "type": "object",
                    "properties": {
                        "result": {
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/Flights"
                            }
                        }
                    }
                }
            }
        }
    }*/

    try {
        // Your Code Goes Here!!!!
        const flight = await Flight.findOne({ departure, origin, destination }); // Replace with actual Mongoose queries

        if (!flight) {
            // If Flight with the given data is not found, return a 404 response
            return res.status(404).json({ error: 'Flight not found' });
        }
        // Return query result
        res.json({
            result: result
        });
    } catch (error) {
        res.json({
            status: error.status
        });
    }
};

/**
 * Sample Controller for Flights
 * @param {JSON} req request information
 * @param {JSON} res response information
 * @returns {JSON} return description
 */
const getFlightById = async (req = request, res = response) => {
    const { id } = req.params
    // Returns list of Sample objects under "result" field
    /*#swagger.responses[200] = {
        "description": "OK",
        "content": {
            "application/json": {
                "schema": {
                    "type": "object",
                    "properties": {
                        "result": {
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/Flights"
                            }
                        }
                    }
                }
            }
        }
    }*/

    try {
        // Your Code Goes Here!!!!
        const flight = await Flight.findById({ id }); // Replace with actual Mongoose queries

        if (!flight) {
            // If Flight with the given ID is not found, return a 404 response
            return res.status(404).json({ error: 'Flight not found' });
        }
        // Return query result
        res.json({
            result: result
        });
    } catch (error) {
        res.json({
            status: error.status
        });
    }
};

module.exports = {
    getFlightById,
    getFlights,
    getFlightByDepartureDate
}