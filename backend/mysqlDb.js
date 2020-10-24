module.exports = db => ({
    getItems(resource) {
        return new Promise((res, rej) => {
            db.query("SELECT id, title, image, date FROM ??", [resource], (err, result) => {
                if(err) {
                    rej(err);
                } else {
                    res(result);
                }
            });
        })
    },
    getItem(resource, id) {
        return new Promise((res, rej) => {
            db.query("SELECT * FROM ??", [resource, id], (err, result) => {
                if(err) {
                    rej(err);
                } else {
                    res(result);
                }
            });
        });
    }
});