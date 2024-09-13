import express from 'express';
import http from 'node:http';

const app = express();
import mainRouter from './router.js';

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/', mainRouter);

const server = http.createServer(app);

server.listen(3000, 'localhost', function(){
    console.log('Litening on localhost:3000');
});
