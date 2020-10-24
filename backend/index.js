const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const config = require('./config');
const db = require('./mysqlDb');
const news = require('./app/news');
const comments = require('./app/comments');

const app = express();
const PORT = 8000;

const connection = mysql.createConnection(config.database);

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

connection.connect(err => {
    if(err) {
        console.log(err);
        throw err;
    }
    console.log('MySQL Database is connected');
    app.use('/news', news(db(connection)));
    app.use('/comments', comments(db(connection)));
    app.use((req, res) => {
        res.status(404).send({"error": "404 Not found"});
    });
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
})