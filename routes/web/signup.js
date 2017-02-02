
var User = require('../../models/user');

module.exports ={

	get: function(req, res) {        //get is finction name....we can ram in place of get
	      res.render('signup');
	},

	post : function(req,res){

       /*var mail = req.body.email;
         var pass = req.body.password;
	   var fname = req.body.name.first;
	   var fname = req.body.name.last;*/
	   var data = req.body;
	   console.log(data);

	  var userr = new User(data);
	  userr.save(function (err, result){
		        console.log(result);
		        if(err){  
		              return res.json({error: true , reason: err});
		            }
		            return res.json({error : false , result : result});
       });


	},

	



    	

} //module



