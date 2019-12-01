const express = require("express");
const router = express.Router();

// TourGuide model
const TourGuide = require("../../models/TourGuide");

// Get all TourGuides
router.get("/", async (req, res) => {
  const tourists = await TourGuide.find();
  res.json({ data: tourGuides });
});

// Get TourGuide by ID
router.get("/:id", async (req, res) => {
  const tourGuide = await TourGuide.findById(req.params.id);
  if (!tourGuide) res.json({ error: "Tour Guide does not exist" });
  else res.json({ data: tourGuide });
});

// Create a tourGuide
router.post("/", async (req, res) => {
  try {
    const newTourGuide = await TourGuide.create(req.body);
    res.json({
      msg: "Tour Guide was created successfully",
      data: newTourGuide
    });
  } catch (error) {
    console.log(error);
  }
});

// Update a tour guide
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const tourGuide = await TourGuide.findOne({ id });
    if (!tourGuide)
      return res.status(404).send({ error: "Tour Guide does not exist" });
    // const isValidated = validator.updateValidation(req.body);
    // if (isValidated.error)
    //   return res
    //     .status(400)
    //     .send({ error: isValidated.error.details[0].message });
    const updatedTourGuide = await TourGuide.updateOne(req.body);
    res.json({
      msg: "Tour Guide updated successfully",
      data: updatedTourGuide
    });
  } catch (error) {
    console.log(error);
  }
});

// Delete a tour guide
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedTourGuide = await TourGuide.findByIdAndRemove(id);
    if (!deletedTourGuide)
      res.status(404).json({ error: "Tour Guide does not exist" });

    res.json({
      msg: "Tour Guide was deleted successfully",
      data: deletedTourGuide
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
