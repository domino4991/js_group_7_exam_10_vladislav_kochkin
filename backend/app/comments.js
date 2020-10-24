const express = require('express');
const router = express.Router();

const createRouter = db => {
    router.get('/', async (req, res) => {
        if(req.query.news_id) {
            try {
                const response = await db.getItems('comments', req.query.news_id);
                res.send(response);
            } catch (e) {
                res.status(404).send({error: "404 not found"});
            }
        } else {
            try {
                const response = await db.getItems('comments');
                res.send(response);
            } catch (e) {
                res.status(404).send({error: "404 not found"});
            }
        }
    });
    router.post('/', async (req, res) => {
        const item = req.body;
        if(item.author === '' || item.comment === '') {
            res.status(400).send({error: "Author and comment cant be empty"});
        } else {
            try {
                const newsItem = await db.createItem('comments', item);
                res.send(newsItem[0]);
            } catch (e) {
                res.status(400).send({error: e.sqlMessage});
            }
        }
    });
    router.delete('/:id', async (req, res) => {
        try {
            const response = await db.deleteItem('comments', req.params.id);
            res.send(response);
        } catch (e) {
            res.status(400).send({error: e.sqlMessage});
        }
    });
    return router;
};

module.exports = createRouter;