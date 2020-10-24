const express = require('express');
const multer = require('multer');
const path = require('path');
const config = require('../config');
const {nanoid} = require('nanoid');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname));
    }
});

const upload = multer({storage});

const router = express.Router();

const createRouter = db => {
    router.get('/', async (req, res) => {
        try {
            const newsItems = await db.getItems('news');
            res.send(newsItems);
        } catch (e) {
            res.status(500).send(e);
        }
    });
    router.get('/:id', async (req, res) => {
        try {
            const newsItem = await db.getItem('news', req.params.id);
            if(newsItem.length === 0) {
                res.status(404).send({error: "404 not found"});
            } else {
                res.send(newsItem[0]);
            }
        } catch (e) {
            res.status(500).send(e);
        }
    });
    return router;
};

module.exports = createRouter;