module.exports = function(app){
	
	app.get('/mySurvey', function(req, res){
		res.sendFile(__dirname+'/views/mySurvey.html');
	});

	app.post('/mySurvey', function(req, res){

	});


};