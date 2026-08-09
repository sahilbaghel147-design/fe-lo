const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());

// Save data to a file
app.post('/collect', (req, res) => {
    const data = req.body;
    const filePath = path.join(__dirname, 'user_data.json');

    fs.appendFile(filePath, JSON.stringify(data, null, 2) + '\n', (err) => {
        if (err) {
            console.error('Error writing file:', err);
            res.status(500).send('Error saving data');
        } else {
            res.status(200).send('Data saved successfully');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});