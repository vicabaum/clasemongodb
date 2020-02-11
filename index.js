const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const dbName = "test";
const collectionName = "mongoTest";
const config = {};
const client = MongoClient(url,config);
client.connect(err=>{
	if(err) throw err;
	const db = client.db(dbName);
	const collection = db.collection(collectionName);
	collection.find().toArray((err,result) => {
		if (err) throw err;
		console.log({ result } , result.length);
		client.close();
	})
	const obj = {name : " carlitos" , adress : "Corrientes 636"};
	collection.insertOne(obj,(err,result) => {
		if(err) throw err;
		console.log ({result});
		client.close()
	})
})