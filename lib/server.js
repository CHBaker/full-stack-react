import express from 'express';
import config from './config';
import serverRender from './renderers/server'
import { data } from './testData'

const app = express();

app.use(express.static('public'));

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', async (req, res) => {
    const initialContent = await serverRender();
    debugger;
    res.render('index', { ...initialContent });
})

app.get('/data', (req, res) => {
    res.send(data)
})

app.listen(config.port, function listenHandler() {
    console.info(`Running on ${config.port}...`);
})
