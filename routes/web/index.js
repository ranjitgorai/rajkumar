var express = require('express');
var router = express.Router();

var signup = require('./signup');
var login = require('./login');
var welcome = require('./welcome');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'LogicSquare Technologies' });
});

var checkSession = function(req,res,next){
	if(req.session.email){
		next();
	}else{
		res.render('login');
	}

};

var checkSesLog = function(req,res,next){
	if(!req.session.email){
		next();
	}else{
		res.redirect('/welcome');
	}

};





router.get('/signup',signup.get);
router.post('/signup',signup.post);

router.get('/login',checkSesLog,login.get);
router.post('/login',checkSesLog,login.post);

/*router.get('/welcom',function(req,res){
	res.render("welcome");
});*/
router.get('/welcome',checkSession,welcome.get);
router.post('/welcome',checkSession,welcome.post);



module.exports = router;
