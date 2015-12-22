var Datastore = require('nedb'), db = new Datastore({ filename: 'taskCollection.db', autoload: true });
var saveTask = function(task,callback){
	db.insert(task,function (err, newDoc) {
  	callback();
	});
};

var viewAllTasks = function(callback){
	
	db.find({},function(err,docs){
		callback(docs);
	});
};

var viewOneTask = function(callback){
	var oneTask =  require('./js/globalCache.js');
	var id = oneTask.id;
	db.find({"_id":id},function(err,docs){
		console.log(docs[0]);
		callback(docs[0]);
	});	
};

var removeTask = function(id,callback){
	db.remove({"_id":id});	
	callback();
}

var updateTask = function(task,callback){
	db.update({_id:task._id},task,{},function (err, newDoc) {
  	callback(err);
	});
};