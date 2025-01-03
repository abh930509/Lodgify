const Listing =require('./models/listing.js');
const {listingSchema} =require('./schema.js');
const { reviewSchema} =require('./schema.js');
const Review =require('./models/review.js');

module.exports.isLoggedIn=(req,res,next)=>{

   
    if(!req.isAuthenticated()){
        req.session.redirectUrl =req.originalUrl;
        req.flash('error','You must be logged in to create listing.');
         return res.redirect('/login');
    }
    next();
};

module.exports.saveRedirectUrl =(req,res,next)=>{
    if( req.session.redirectUrl ){
        res.locals.redirectUrl = req.session.redirectUrl ;
    }
    next();
};

module.exports.isOwner =async(req,res,next)=>{
    let{id}= req.params;
    let list= await Listing.findById(id);

    if(! list.owner.equals(res.locals.currUser._id)){
       req.flash('error','You dont have permission to edit.');
       return res.redirect(`/listings/${id}`);}
       next();
}

module.exports.validateListing =(req ,res,next)=>{
    let {err} =listingSchema.validate(req.body);
    if(err){
        let errMsg =err.details.map((el)=>el.message).join(",");
        throw new ExpressError(400 ,err);
    }else{
        next();
    }
}

module.exports.validateReviews=(req ,res,next)=>{
    let {err} = reviewSchema.validate(req.body);
    if(err){
        let errMsg =err.details.map((el)=>el.message).join(",");
        throw new ExpressError(400 ,err);
    }else{
        next();
    }
}


module.exports.isAuthor =async(req,res,next)=>{
    let{id,reviewId}= req.params;
    let review= await Review.findById(reviewId);

    if(! review.author._id.equals(res.locals.currUser._id)){
       req.flash('error','You dont have permission to Delete !.');
       return res.redirect(`/listings/${id}`);}
       next();
}