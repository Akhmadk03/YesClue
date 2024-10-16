app.post('/register', (req, res) => {
    const { username, password, email } = req.body;
    const sql = 'INSERT INTO users (username, password, email) VALUES (?, ?, ?)';
    db.query(sql, [username, password, email], (err, result) => {
        if (err) throw err;
        res.send({ message: 'User registered successfully!' });
    });
});
