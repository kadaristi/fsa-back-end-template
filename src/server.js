import express from 'express';
import { route } from 'express/lib/application';
import { routes } from './routes';
import { helloRoute } from "./routes/helloRoute";
import { db } from './db';

const app = express();
app.use(express.json());


const start = async() => {
    await db.connect('mongodb://localhost:27017');
    await app.listen(8080);
    console.log('Server is listening on port 8080');
}

start();

routes.forEach(route => {
    app[route.method](route.path, route.handler);
});

//app[helloRoute.method](helloRoute.path, helloRoute.handler);

// app.get('/hello', (req, res) => {
//     res.status(200).json({name: 'Shaun'});
// });



