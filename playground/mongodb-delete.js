const { MongoClient } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongo Server', err);
    }

    console.log('Server connected successfully!!');

    // deleteMany
    // db.collection('Todos').deleteMany({ text: 'Eat Lunch' }).then((data) => {
    //     console.log(data);
    // })

    //deleteOne

    db.collection('Todos').deleteOne({ text: 'Eat Lunch' }).then((data) => {
        console.log(data);
    })

    //findAndDeleteOne


});