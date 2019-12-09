const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const Trip = require("../../models/Trip");

// Get all trips
router.get("/", async (req, res) => {
  const trips = await Trip.find();
  res.json({ data: trips });
});

//Tourist get trips by city.
router.get("/:city", async (res, req) => {
  const city = req.params.city;
  const trips = await Trip.find({ city: city });
  res.json({ data: trips });
});

//Get specifc trip
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const trip = await Trip.findById({ _id: id });
    res.json({ data: trip });
  } catch (error) {
    console.log(error);
    res.json({ msg: "trip does not exist" });
  }
});
//Get trips of specific tourguide
router.get("/:tourguideId", async (req, res) => {
  try {
    const id = req.params.tourguideId;
    const tourguide = await User.findById({ _id: id });
    if (tourguide.type != "TourGuide") {
      res.json({ msg: "Specified person is not a tourguide" });
    }
    const trips = await Trip.find({ tourguide: id });
    res.json({ data: trips });
  } catch (error) {
    console.log(error);
  }
});

//TourGuide create trip
router.post("/createTrip/:tourGuideId", async (req, res) => {
  try {
    const id = req.params.tourGuideId;
    const tourguide = await User.findById({ _id: id });
    if (tourguide.type != "TourGuide") {
      res.json({ msg: "You have to be a tourguide" });
    }
    const { city, placestoVisit } = req.body;
    const newTrip = new Trip({
      city,
      placestoVisit,
      tourguide: id
    });

    newTrip.save().then(newTrip => res.json({ data: newTrip }));
  } catch (error) {
    console.log(error);
    res.json({ msg: "error creating trip" });
  }
});

//TourGuide adds places to trip
router.put("/addplaces/:tripId", async (req, res) => {
  try {
    const tourguide = req.params.tourGuideId;
    const tripId = req.params.tripId;
    const places = req.body.places;
    const updatedTrip = await Trip.updateOne(
      { _id: tripId },
      { $push: { placestoVisit: places } }
    );
    res.json({ data: updatedTrip });
  } catch (error) {
    console.log(error);
    res.json({ msg: "couldn't add places" });
  }
});

//TourGuide remove places from a trip
router.put("/removeplaces/:tripId", async (req, res) => {
  try {
    const id = req.params.tripId;
    const places = req.body.places;
    const updatedTrip = await Trip.updateOne(
      { _id: id },
      { $pullAll: { placestoVisit: places } }
    );
    res.json({ data: updatedTrip });
  } catch (error) {
    console.log(error);
    res.json({ msg: "couldn't remove places" });
  }
});

// TourGuide delete trip.
router.delete("/:tourGuideId/:tripId", async (req, res) => {
  try {
    const id = req.params.tripId;
    const tourguide = req.params.tourGuideId;
    const trip = await Trip.findByIdAndDelete(id, { tourguide: tourguide });
    res.json({ msg: "Trip deleted ", data: trip });
  } catch (error) {
    console.log(error);
    res.json({ msg: "Couldn't delete trip" });
  }
});

module.exports = router;
