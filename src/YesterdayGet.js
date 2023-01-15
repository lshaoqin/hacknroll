import db from "./server.js"

app.get('/data', (req, res) => {
  db.collection('game').doc('data').get()
    .then((doc) => {
      if (!doc.exists) {
        res.status(404).send("No such document!");
      } else {
        const data = doc.data();
        const response = {
          data: Object.keys(data).map(key => ({
            word: key,
            guesses: data[key].guesses,
            points: data[key].points
          }))
        }
        res.json(response);
      }
    })
    .catch((err) => {
      console.log('Error getting document', err);
    });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});