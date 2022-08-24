import Express from "express";
import { ArtistController } from "../Controllers/artist.controller.js"

const controller = new ArtistController();

const router = Express.Router();

router.get('/artists', (req, res) =>{
    controller.list(req, res)
})

router.get('/artist/:id([0-9]*)', (req, res) =>{
    controller.get(req, res)
})

export { router };