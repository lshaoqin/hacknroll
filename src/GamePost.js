import db from "./server.js"

const express = require('express');
const firebase = require('firebase-admin');
const bodyParser = require('body-parser');

const app = express();

// Use body-parser middleware to parse JSON body
app.use(bodyParser.json());

// Initialize Firebase



app.post('/game', (req, res) => {
  const { session_id, guess } = req.body;
  db.collection("game").doc("game").set({ session_id, guess })
    .then(() => {
      res.json({ message: "Data added successfully" });
    })
    .catch((error) => {
      console.error("Error adding data: ", error);
      res.status(500).json({ error: error.message });
    });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});