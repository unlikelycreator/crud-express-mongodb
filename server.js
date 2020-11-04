const express = require('express');
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express();


MongoClient.connect('mongodb+srv://username:password@cluster0.vmmbl.mongodb.net/<dbname>?retryWrites=true&w=majority', { useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to Database')
        const db = client.db('star-wars-quotes')
        app.set('view engine', 'ejs')
        app.use(bodyParser.urlencoded({ extended: true }))

        app.get('/', (req, res) => {
            res.sendFile('C:/Hritik/programming/Advanced Web/FirstMern' + '/index.html')
            db.collection('quotes').find().toArray()
                .then(results => {
                    console.log(results)
                })
                .catch(error => console.error(error))
            res.render('index.ejs', {})
        })
        app.post('/quotes', (req, res) => {
            db.collection('quotes').insertOne(req.body, (err, result) => {
                if (err) return console.log(err)
                console.log('saved to database')
                res.redirect('/')
            })
        })

        app.listen(3000, function() {
            console.log('listening on 3000')
        })
    })
    .catch(console.error)

//app.get('/', (req, res) => {/*...*/})
//app.post('/quotes', (req, res) => {/*...*/})
