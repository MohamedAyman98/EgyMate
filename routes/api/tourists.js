const express = require("express");
const router = express.Router();

// Tourist model
const Tourist = require("../../models/Tourist");

// Get all tourists
router.get("/", async (req, res) => {
  const tourists = await User.find();
  res.json({ data: tourists });
});

// Get tourist by ID
router.get("/:id", async (req, res) => {
  const tourist = await User.findById(req.params.id);
  if (!tourist) res.json({ error: "Tourist does not exist" });
  else res.json({ data: tourist });
});

// Create a tourist
router.post("/", async (req, res) => {
  try {
    const newTourist = await User.create(req.body);
    res.json({ msg: "Tourist was created successfully", data: newTourist });
  } catch (error) {
    console.log(error);
  }
});

// Update a tourist
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const tourist = await User.findOne({ id });
    if (!tourist)
      return res.status(404).send({ error: "Tourist does not exist" });
    // const isValidated = validator.updateValidation(req.body);
    // if (isValidated.error)
    //   return res
    //     .status(400)
    //     .send({ error: isValidated.error.details[0].message });
    const updatedTourist = await User.updateOne(req.body);
    res.json({ msg: "Tourist updated successfully", data: updatedTourist });
  } catch (error) {
    console.log(error);
  }
});

// Delete a tourist
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedTourist = await User.findByIdAndRemove(id);
    if (!deletedTourist)
      res.status(404).json({ error: "Tourist does not exist" });

    res.json({ msg: "Tourist was deleted successfully", data: deletedTourist });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
