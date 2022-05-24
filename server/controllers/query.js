
import {db} from "../database/connection.js";

export const getData = async (req, res) => {
    try {
        const response = await db.query('SELECT * FROM `test1`;')
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}
