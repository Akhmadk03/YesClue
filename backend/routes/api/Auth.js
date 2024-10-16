app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
    db.query(sql, [username, password], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send({ message: 'Login successful!' });
        } else {
            res.status(401).send({ message: 'Invalid credentials' });
        }
    });
});
