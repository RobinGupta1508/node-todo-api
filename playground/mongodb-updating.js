const { MongoClient } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongo Server', err);
    }


    db.collection('Todos').findOneAndUpdate({ text: 'Attend a metting' }, {
        $set: {
            completed: true
        }
    }, { returnOriginal: false }).then(result => {
        console.log(result)
    });

});