const sqlite3 = require('sqlite3').verbose();

const DBSOURCE = 'calorie_counter.sqlite';

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.error('Error connecting to the SQLite database:', err.message);
        throw err;
    } else {
        console.log('Connected to the SQLite database.');
    }
});

module.exports = db;
