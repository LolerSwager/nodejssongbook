import db from '../config/db.config.js'

class SongController {
    list = async (req, res) =>{
        res.json('listen over sange');
    }
}

export { SongController }