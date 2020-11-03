const express = require('express');
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express();



MongoClient.connect('mongodb+srv://<Username>:<Password>@cluster0.vmmbl.mongodb.net/<dbname>?retryWrites=true&w=majority', { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('star-wars-quotes')
    app.use(bodyParser.urlencoded({ extended: true }))

    app.get('/', (req, res) => {
  	res.sendFile('<absolute project folder path>' + '/index.html')
	})

	app.post('/quotes', (req, res) => {
  	console.log(req.body)
  	})

  	app.listen(3000, function() {
	console.log('listening on 3000')
	})
	})
  .catch(console.error)

//app.get('/', (req, res) => {/*...*/})
//app.post('/quotes', (req, res) => {/*...*/})



