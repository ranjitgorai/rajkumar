var User = require('../../models/user');

module.exports ={

	get: function(req, res) {        //get is finction name....we can ram in place of get
	      res.render('login');
	},
	post: function(req, res) {        //get is finction name....we can ram in place of get
	    var fname = req.body.name.first;
	   console.log(fname);
	   var lname = req.body.name.last;
	   console.log(lname);
		var umail = req.body.email;
		console.log(umail);
		var phn = req.body.phone ;
		console.log(phn);
		var city = req.body.address.city;
		console.log(city);
		var state = req.body.address.state;
		console.log(state);
		var pin = req.body.address.pin;
		console.log(pin);
		var country = req.body.address.country;
		console.log(country);
	}

}
