var express = require('express');
var moment = require('moment');
var login = require('./login');
var router = express.Router();
var User = require('../../models/user');
var welcome = require('./welcome');


router.get('/', function(req, res, next) {
  res.render('login');
});
router.post('/', function(req, res, next) {
	var mail = req.body.email;
	console.log(mail);
	var pass = req.body.password;
	console.log(pass);

	User.findOne({email: mail}).exec(function(err,user){

	  if(user == null){
	  	return res.json({error:true,result:"Enter your registered email"});

	  }else{

		  	 user.comparePassword(pass, function(err,isMatch){
			if(isMatch && !err){
				
				
				req.session.name = user.name.full;
				req.session.email = user.email;
				req.session.logintime = moment().format('LLL');
				
				return res.send("Successfully login");

			    //return  res.json('welcome',{error : false, name:req.session. name});


			}else{
				 	return res.json({error:true,result:"Wrong Password"});
			}

		  });

	   }



	});

  
});




var checkSession = function(req,res,next){
	if(req.session.email){
		next();
	}else{
		res.redirect('login');
	}

};

var checkSesLog = function(req,res,next){
	if(!req.session.email){
		next();
	}else{

        res.redirect('/welcome');
	}

};
router.get('/login',checkSesLog,login.get);
router.post('/login',checkSesLog,login.post);

/*router.get('/welcom',function(req,res){
	res.render("welcome");
});*/
router.get('/welcome',checkSession,welcome.get);
router.post('/welcome',checkSession,welcome.post);

//router.get('/login',login.getany);

//router.post('/login',login.postany);

router.get('/forgot', function(req, res, next) {
  res.render('forgot');
});






module.exports = router;
