const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your_password',  // Replace with your MySQL password
    database: 'yesclue'
});
db.connect((err) => {
    if (err) {
        console.log('MySQL connection error:', err);
        return;
    }
    console.log('Connected to MySQL');
});
