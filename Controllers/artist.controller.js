import ArtistModel from '../Models/artist.model.js';

const artist = new ArtistModel;
class ArtistController {
    constructor(){
        console.log('Instance call of Artist Controller');
    }

    list = async (req, res) => {
        const result = await artist.getList();
        res.json(result);
    }

    get = async (req, res) => {
        const result = await artist.getRow(req.params.id);
        res.json(result);
    }
}

export { ArtistController }