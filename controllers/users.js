const User =require('../models/user');

module.exports.SignUpForm =(req,res)=>{
    res.render('./users/signupform.ejs');
};

module.exports.SignUp  = async(req,res)=>{
   try{
    let {username, email ,password}= req.body;
    let newUser = new  User({email,username});
    const registeredUser=await User.register(newUser ,password);
    
    req.login(registeredUser,(err)=>{
        if(err){
            next();
        }
        req.flash('success','Welcome to the Wonderlust !.');
        res.redirect( req.session.redirectUrl );
    });
   
   }catch(e){
            req.flash('error',e.message);
            res.redirect('/signup');
   }
};

module.exports.loginForm =(req,res)=>{
    res.render('./users/loginform.ejs');
}

module.exports.login = async(req,res)=>{
    req.flash('success','welcome to Wonderlust! You logged in !');
    let redirectUrl =res.locals.redirectUrl||'/listings';
   res.redirect(redirectUrl);
};

module.exports.logOut = (req,res)=>{
    req.logout((err)=>{
        if(err){
            next();
        }
        req.flash('success','You have successfully Logged Out !.');
        res.redirect('/listings');
    });
};