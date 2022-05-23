
import {db} from "../database/connection.js";

export const getData = async (req, res) => {
    try {
        db.query(
            'SELECT * FROM `test1`;',
            function(error, response, fields) {
                try {
                    res.status(200).json(response)
                } catch (error) {
                    console.log(error);
                }       
            }
        )
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}
