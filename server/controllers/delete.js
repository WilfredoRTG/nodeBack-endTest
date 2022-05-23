
import {db} from "../database/connection.js";

export const deleteData = async (req, res) => {
    try {
        db.query(
            'DELETE FROM test1 WHERE label="test Nueva"',
            (error, response, fields) => {
                if (error) {
                    console.log(error);
                }
                else {
                    res.status(202).send(response);
                }
            }
        )
        
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}
