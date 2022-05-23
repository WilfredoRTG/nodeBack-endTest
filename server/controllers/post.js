
import {db} from "../database/connection.js";

var post = {label: 'test Nueva'}

export const postData = async (req, res) => {
    try {
        db.query(
            'INSERT INTO test1 set ?', post,
            (error, response, fields) => {
                if (error) {
                    console.log(error);
                }
                else {
                    res.status(201).send(response);
                }
            }
        )
        
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}
