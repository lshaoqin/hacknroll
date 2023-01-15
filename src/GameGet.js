import db from "./server.js"

app.get('/game', (req, res) => {
  db.collection('game').doc('game').get()
    .then((doc) => {
      if (!doc.exists) {
        res.status(404).send("No such document!");
      } else {
        res.json(doc.data());
      }
    })
    .catch((err) => {
      console.log('Error getting document', err);
    });
});
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
