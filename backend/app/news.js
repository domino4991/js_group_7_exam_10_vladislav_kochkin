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
    router.post('/', upload.single("image"), async (req, res) => {
        const item = req.body;
        if(item.title === '' || item.body === '') {
            res.status(400).send({error: "Title and body cant be empty"});
        } else {
            try {
                if(req.file) item.image = req.file.filename;
                const newsItem = await db.createItem('news', item);
                res.send(newsItem);
            } catch (e) {
                res.status(400).send({error: e.sqlMessage});
            }
        }
    });
    router.delete('/:id', async (req, res) => {
        try {
            const response = await db.deleteItem('news', req.params.id);
            res.send(response);
        } catch (e) {
            res.status(400).send({error: e.sqlMessage});
        }
    });
    return router;
};

module.exports = createRouter;