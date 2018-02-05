const { MongoClient } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongo Server', err);
    }

    // db.collection('Todos').find({'completed': false}).toArray().then((data)=>{
    // 	console.log(data);
    // }, (err) => {
    // 	console.log('error while fetching todo list', err)
    // });

    db.collection('Users').find({ 'name': 'Robin' }).count().then((count) => {
        console.log(`Total records found : ${count}`);
    }, (err) => {
        console.log('error while fetching todo list', err)
    });


    // db.close();
});