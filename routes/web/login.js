var User = require('../../models/user');


module.exports ={
	get : function(req,res){

         res.render('login');
	},
	post : function(req,res){
		 var mail = req.body.email;
		 //console.log(mail);
         var pass = req.body.password;
         //console.log(pass);

      User.findOne({email: mail}).exec(function(err,user){

      	  if(user == null){
      	  	return res.json({error:true,result:"Enter your registered email"});

      	  }else{

      	  	 user.comparePassword(pass, function(err,isMatch){
         	if(isMatch && !err){
         		
         		
         		req.session.name = user.name.full;
         		req.session.email = user.email;
         		//req.session.logintime = moment();
         		return res.send("Successfully login");

         	    //return  res.json('welcome',{error : false, name:req.session. name});


         	}else{
         		 	return res.json({error:true,result:"Wrong Password"});
         	}

         });

      	}

         
        
      });




    }

     

}

