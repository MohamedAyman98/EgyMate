const express = require("express");
const router = express.Router();
const User = require("../../models/User")
const Trip = require("../../models/Trip");

//get by city
router.get("/:city",async(res,req)=>{
    const city = req.params.city
    const trips = await Trip.find({city : city})
    res.json({data: trips})
})

//get specifc trip
router.get("/:id",async(req,res)=>{
    try{
    const id = req.params.id
    const trip = await Trip.findById({_id : id})
    res.json({data : trip})
    }catch(error){
        console.log(error)
        res.json({msg : "trip does not exist"})
    }
})
//get ttips of specific tourguide
router.get("/:tourguide",async(req,res)=>{
    try{  
    const id = req.params.tourguide
    const tourguide = await User.findById({_id : id})
    if(tourguide.type != "TourGuide")
    {
        res.json({msg : "Specified person is not a tourguide"})
    }
     const trips = await Trip.find({tourguide : id})
     res.json({data : trips})
    }catch(error){
        console.log(error)
    }
})

//create trip
router.post("/create/:id",async(req,res)=>{
    try{
    const id = req.params.id
    const tourguide = await User.findById({_id : id})
    if(tourguide.type != "TourGuide")
    {
        res.json({msg : "You have to be a tourguide"})
    }
    const {
        city,
        placestoVisit
    }= req.body
    const newTrip = new Trip(
        city,
        placestoVisit,
        id
    )
    res.json({data : newTrip})
    }catch(error){
        console.log(error)
        res.json({msg : "error creating trip"})
    }
}
)

//add places 
router.put("/:id/addplaces",async(req,res)=>{
    try{
    const id = req.params.id
    const places = req.body.places
    const updatedTrip = await Trip.update({_id : id}, {$push:{"placestoVisit" : {$each : places}}})
    res.json({data : updatedTrip})
    }catch(error){
        console.log(error)
         res.json({msg : "couldn't add places"})
    }
})

//remove places
router.put("/:id/removeplaces",async(req,res)=>{
    try{
    const id = req.params.id
    const places = req.body.places
    const updatedTrip = await Trip.update({ _id: id }, { $pullAll: { placestoVisit: places } })
    res.json({data : updatedTrip})
    }catch(error)
    {
        console.log(error)
        res.json({msg : "couldn't remove places"})
    }
})

router.delete("/:id" ,async(req,res)=>{
    try{
    const id = req.params.id
    const trip = await Trip.findByIdAndRemove({_id : id})
    res.json({msg : "Trip delted ", data : trip})
    }catch(error)
    {
        console.log(error)
        res.json({msg : "Couldn't delete trip"})
    }
})

