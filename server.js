const express = require('express');
const fs = require('fs');
const app = express();
const port = 3001;

app.use(express.json());


app.get('/db.json', (req, res) => {
  fs.readFile('./public/db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to read db.json' });
    }
    res.json(JSON.parse(data));
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});