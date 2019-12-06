const express = require("express");
const router = express.Router();
const Place = require("../../models/Place")

router.get("/", async(req,res)=>{
    const places = await Place.find()
    res.json({data: places})
})

router.get("/:id" , async(req, res)=>{
    try{
    const id = req.params.id
    const place = await Place.findById({_id : id})
    res.json({sata : place})
    }catch(error){
        console.log(error)
    }
} )

router.post("/",async(req,res)=>{
    try{
      const {
        name,
        city,
        locationURL
      }= req.body
      const place = new Place({
          name,
          city,
          locationURL
      })
      res.json({data : place})
    }catch(error){
        console.log(error)
        res.json({msg : "Couldn't create place"})
    }
})

router.delete("/:id",async(req,res)=>{
    try{
        const id = req.params.id
        const place = await Place.findByIdAndRemove({_id : id})
        res.json({msg: "place deleted ", data : place})
    }catch(error){
        console.log(error)
        res.json({msg : "couldn't delete"})
    }
})
router.put("/:id",async(req,res)=>{
    try{
        const id = req.params.id
        const place = await Place.findOneAndUpdate({_id : id},req.body)
        res.json({data : place})
    }catch(error){
        console.log(error)
        res.json({msg : "Couldn't update"})
    }
})