import db from '../config/db.config.js'

class ArtistModel {
    constructor() {
        console.log('Instance call of Song Model');
    }

    getList = (req, res) => {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM song`;
            db.query(sql, (err, result) => {
                if(err){
                    reject(res.send(err))
                } else{
                    resolve(result)
                }
            })
        })
    }

    getRow = (req, res) => {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM song  WHERE id = ?`;
            db.query(sql, req, (err, result) => {
                if(err){
                    reject(res.send(err))
                } else{
                    resolve(result)
                }
            })
        })
    }
}

export default ArtistModel