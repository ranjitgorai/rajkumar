var User = require('../../models/user');
var generator = require('generate-password');
var  mailer = require('express-mailer');

module.exports ={

	get: function(req, res) {        //get is finction name....we can ram in place of get
	      res.render('login');
	},
	post: function(req, res) {        //get is finction name....we can ram in place of get
	    var fname = req.body.name.first;
	    //console.log(fname);
	   var lname = req.body.name.last;
	   //console.log(lname);
		var umail = req.body.email;
		//console.log(umail);
		var phn = req.body.phone ;
		//console.log(phn);
		var city = req.body.address.city;
		//console.log(city);
		var state = req.body.address.state;
		//console.log(state);
		var pin = req.body.address.pin;
		//console.log(pin);
		var country = req.body.address.country;
		//console.log(country);

  User.find({email:umail }).exec(function (err, results) {

	    if(err){}

	  if(results.length){

	      return res.json({error : false , result : 'This User Already Exist'});

	  }else{

             var password = generator.generate({
				    length: 10,
				    numbers: true
			  });
			 //console.log(password);

            var data = {
            	"name" :{
            		 'first' : fname,
            	     'last' : lname

            	    },

            	 'email' : umail,
            	 'password' : password,
            	 'phone' : phn,
            	 "address" :{
            	 	 
	            	 'city' : city,
	            	 'state' : state,
	            	 'pin' : pin,
	            	 'country' : country

            	 }


            };
            //console.log(data);
            console.log(password);
            var userr = new User(data);
            console.log(userr);
            res.mailer.send('passw', {
			    to: umail,
			    subject: 'Your Login Password',
			    text:password
			  }, function (err, success) {
			  	//console.log(err, success);
			    if (err) {

			      res.send({result: 'There was an error sending the email'});
			    }else{
			    	  res.send({result: 'Your Login Password was send in Your Email'});
			    }

			  });


            userr.save(function (err, result){
		        console.log(result);
		        if(err){
		              return res.json({error: true , reason: err});
		            }
		            return res.json({error : false , result : 'Your Login Password was send in Your Email'});


            });


             //console.log(password);
             //console.log(umail);

			  

	    }
	 });
 }

/*getany : function(req,res){

         res.render('login');
	},*/

//postany : function(req,res){}











}

