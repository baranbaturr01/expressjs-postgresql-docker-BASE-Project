require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const db = require('./src/services/db');

const Router = require('./src/routes/router');
const app = express();


return db.sequalize.sync().then((sa) => {
    console.log('Database created');
}).then(() => {

    app.use(express.json());

    app.use(express.urlencoded({ extended: true }));

    app.use('/mobile', Router);


    app.listen(3006, function () {
        console.log('Example app listening on port 3006!');
    });
    return app
}).catch(err => {
    console.log("ERORRRR!!!", err);
}
)

