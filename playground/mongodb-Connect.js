const { MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect to mongo server');
	}

	console.log('Successfully connected to server');

	// db.collection('Todos').insertOne({
	// 	'text' : 'Attend a metting',
	// 	'completed' : false
	// }, (err, result) => {
	// 	if(err){
	// 		return console.log('error while inserting Todo', err);
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2))
	// })


	db.collection('Users').insertOne({
		'name' : 'Robin',
		'age' : 25,
		'location' : 'jaipur'
	}, (err, result) => {
		if(err){
			return console.log('error while inserting user', err);
		}

		console.log(JSON.stringify(result.ops, undefined, 2));
	})

	db.close();
})
