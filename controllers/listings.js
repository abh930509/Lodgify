const Listing =require('../models/listing.js');


//index route
module.exports.index=async(req ,res)=>{

    let allListings= await Listing.find({});
   
    res.render('./listings/index.ejs',{allListings});
};


//create route
module.exports.createListings=(req ,res)=>{
    
    // res.send('eowfksl');
    res.render('./listings/new.ejs');
};

module.exports.createPost =async(req,res )=>{
     let url =req.file.path;
     let filename =req.file.filename;

     console.log(url , '..', filename);
    const newListing = new Listing (req.body.listing);
    newListing.owner=req.user._id;
    newListing.image={url,filename};
    
    await newListing.save();
    req.flash('success','New Listing is Created !.');
    res.redirect('/listings');

};

//show route

module.exports.showListings =async(req,res)=>{
    let {id} =req.params;
   
    let list =  await Listing.findById(id).populate({path:'reviews',populate:{path:'author'},}).populate('owner');
    if(!list){
        req.flash('error','Listing you requested for does not exists !.');
        res.redirect('/listings');
    }  
 
    res.render('./listings/show.ejs',{list});
};

//edit route

module.exports.editForm =async(req,res)=>{
    let {id}=req.params;
    let list=  await Listing.findById(id);
    if(!list){
        req.flash('error','Listing you requested for does not exists !.');
        res.redirect('/listings');
    } 
    let originalImage=list.image.url;
    originalImage= originalImage.replace("/upload","/upload/w_250");
    
    res.render('listings/edit.ejs' ,{list,originalImage});
};


module.exports.editPost =async(req,res)=>{

    let {id}= req.params;
    
    let updatedata = await Listing.findByIdAndUpdate(id,{...req.body.listing});
    console.log(updatedata);
    if(typeof req.file != 'undefined'){let url =req.file.path;
    let filename =req.file.filename;
    updatedata.image ={url ,filename};
    await updatedata.save();}
    req.flash('success','Listing is Updated !.');
    res.redirect(`/listings/${id}`);
  
};

//delete route

module.exports.deleteRoute=async(req,res)=>{
    let {id}= req.params;
    let deletedData = await Listing.findByIdAndDelete(id);
 
    req.flash('success','Listing is Deleted!.');
    res.redirect('/listings');

};