const { request, response } = require("express");

// Mongoose Schemas
const Airline = require("./airlines.schema");

/**
 * Sample Controller
 * @param {JSON} req request information
 * @param {JSON} res response information
 * @returns {JSON} return description
 */
const getAirlines = async (req = request, res = response) => {
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
                                "$ref": "#/components/schemas/Airlines"
                            }
                        }
                    }
                }
            }
        }
    }*/

    try {
        // Your Code Goes Here!!!!
        const result = await Airline.find({}); // Replace with actual Mongoose queries
        console.log(result)
        if (!result) {
            // If airline with the given ID is not found, return a 404 response
            return res.status(404).json({ error: 'Airlines not found' });
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
 * Sample Controller for Airlines
 * @param {JSON} req request information
 * @param {JSON} res response information
 * @returns {JSON} return description
 */
const getAirlineById = async (req = request, res = response) => {
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
                                "$ref": "#/components/schemas/Airlines"
                            }
                        }
                    }
                }
            }
        }
    }*/

    try {
        // Your Code Goes Here!!!!
        const airline = await Airline.findById(id); // Replace with actual Mongoose queries

        if (!airline) {
            // If airline with the given ID is not found, return a 404 response
            return res.status(404).json({ error: 'Airline not found' });
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
    getAirlines,
    getAirlineById
}