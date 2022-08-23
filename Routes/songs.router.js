import Express from "express";
import { SongController } from "../Controllers/song.controller.js"

const controller = new SongController();

const router = Express.Router();

router.get('/song', (req, res) =>{
    controller.list(req, res)
})

export { router };