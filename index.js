const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const app = express();

const CONNECTION_STRING = 'mongodb://mongo:27017';

MongoClient.connect(CONNECTION_STRING)
  .then(client => {
    console.log('connected to mongo');
    const db = client.db('data')
    const collection = db.collection('quotes')

    app.get('/', (req, res) => {
      collection.find().toArray()
        .then(results => {
          res.send(results)
        })
    });

    app.listen(3000, () => console.log('app is listening at port 3000'))
  })
  .catch(error => console.error(error));

