import express from "express";
import bodyParser from "body-Parser";

import usersRoutes from './routes/users.js';


const app = express();
const PORT = 3000;

app.use(bodyParser.json());

//routes

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
    res.send('this is homepage');
});

app.listen(PORT, () => {
    console.log(`server running on port : http://localhost${PORT}`)
})