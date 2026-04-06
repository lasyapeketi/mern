const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
res.send(`
<form method="POST" action="/submit">
<input type="text" name="username" placeholder="Enter Name">
<button type="submit">Submit</button>
</form>
`);
});

app.post('/submit', (req, res) => {
res.send("Welcome " + req.body.username);
});

app.listen(3000);