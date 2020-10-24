module.exports = db => ({
    getItems(resource, news_id) {
        return new Promise((res, rej) => {
            if(resource === 'news') {
                db.query("SELECT id, title, image, date FROM ??", [resource], (err, result) => {
                    if(err) {
                        rej(err);
                    } else {
                        res(result);
                    }
                });
            } else {
                if(news_id) {
                    db.query("SELECT * FROM ?? WHERE news_id = ?", [resource, news_id], (err, result) => {
                        if(err) {
                            rej(err);
                        } else {
                            res(result);
                        }
                    });
                } else {
                    db.query("SELECT * FROM ??", [resource], (err, result) => {
                       if(err) {
                           rej(err);
                       } else {
                           res(result);
                       }
                    });
                }
            }
        })
    },
    getItem(resource, id) {
        return new Promise((res, rej) => {
            db.query("SELECT * FROM ?? WHERE id = ?", [resource, id], (err, result) => {
                if(err) {
                    rej(err);
                } else {
                    res(result);
                }
            });
        });
    },
    createItem(resource, item) {
        return new Promise((res, rej) => {
            db.query("INSERT INTO ?? SET ?", [resource, item], (err, result) => {
                if(err) {
                    rej(err);
                }
                item.id = result.insertId;
                db.query("SELECT * FROM ?? WHERE id = ?", [resource, item.id], (err, result) => {
                    if(err) {
                        rej(err);
                    } else {
                        res(result);
                    }
                });
            });
        });
    },
    deleteItem(resource, id) {
        return new Promise((res, rej) => {
            db.query("DELETE FROM ?? WHERE id = ?", [resource, id], (err) => {
                if(err) {
                    rej(err);
                }
                res({successMessage: `Item with id: ${id} has been removed from table ${resource}`});
            });
        })
    },
});