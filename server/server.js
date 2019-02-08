require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

mongoose.connect(process.env.URLDB, {
        useCreateIndex: true,
        useNewUrlParser: true
    },
    (err, res) => {
        if (err) throw err;

        console.log('Conexión a base de datos en línea')
    });

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(require('./routes/usuario'));


app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});