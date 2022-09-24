const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/Views/Home.html");
})

app.get('/add', (req, res) => {
    res.sendFile(__dirname + "/Views/Add.html");
})

app.post('/cars/', (req, res) => {
  //let name = req.body.name;
  console.log(req.body.name);
  return res.json(req.body.name);
});

const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
