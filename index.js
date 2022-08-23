import Express from "express";
import {router as SongRouter} from "./Routes/songs.router.js";

const port = 4000;

const app = Express();

app.use(SongRouter);

app.listen(process.env.PORT || port,() => {
    console.log(`port is on ${port}`)
});