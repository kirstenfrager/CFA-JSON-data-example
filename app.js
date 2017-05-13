// Create a json formatted dataset that describes something in your life (family members, favourite puns, students on your table)
// Use the express generator to create an node/express app
// Create a root route which will render an ejs template with your data
// Create another route which sends the data in json format

const express = require('express');
const app = express();
const path = require('path');
const dataFile = require('./data.json')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/', function (req, res) {
  res.render('index', { dataVariable: dataFile })
})

app.get('/json', (req, res) => {
  res.json(dataFile)
})

app.listen(3000, function () {
  console.log('json-dataset-basic app listening on port 3000!')
})
