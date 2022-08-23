import db from '../config/db.config.js'

class SongController {
    list = async (req, res) =>{
        const sql = `SELECT * FROM song`;
        db.query(sql, (err, result) => {
            res.json(result);
        })
    }
}

export { SongController }