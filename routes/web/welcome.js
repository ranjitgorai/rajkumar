module.exports ={
	get : function(req,res){
		/*if(req.session.email!=null){
        res.render('welcome',{name:req.session.name ,email:req.session.email});
       }else{

       	 res.redirect('login');

       }*/
       res.render('welcome',{name:req.session.name , email:req.session.email, time:req.session.logintime});
	},
	post : function(req,res){
           console.log(res.body);
         
         req.session.destroy();
         return res.json('Good byeee');
	}
}