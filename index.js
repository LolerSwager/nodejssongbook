import Express from "express";
import {router as SongRouter} from "./Routes/songs.router.js";
import {router as ArtistRouter} from './Routes/artist.router.js'

const port = 4000;

const app = Express();

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.use(SongRouter);
app.use(ArtistRouter);

app.listen(process.env.PORT || port,() => {
    console.log(`port is on ${port}`)
});
