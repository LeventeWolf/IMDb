const {createPool} = require('mariadb');

const pool = createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'imdb'
});


module.exports = {pool}