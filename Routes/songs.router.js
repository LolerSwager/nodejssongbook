import Express from "express";
import { SongController } from "../Controllers/song.controller.js"

const controller = new SongController();

const router = Express.Router();

router.get('/songs', (req, res) =>{
    controller.list(req, res)
})

router.get('/song/:id([0-9]*)', (req, res) =>{
    controller.get(req, res)
})

export { router };