
import {db} from "../database/connection.js";

export const deleteData = async (req, res) => {
    try {
        const response = await db.query('DELETE FROM test1 WHERE label="test Nueva"')
        res.status(201).json(response)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}
