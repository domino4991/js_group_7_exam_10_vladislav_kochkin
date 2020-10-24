const path = require('path');

const rootPath = __dirname;

module.exports = {
    rootPath,
    uploadPath: path.join(rootPath, 'public/uploads'),
    database: {
        host: 'localhost',
        user: 'root',
        password: '1q@W3e$R5t',
        database: 'news_db'
    }
};