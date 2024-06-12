process.setMaxListeners(1); // Set maximum number of listeners to 15
// index.js

import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import cors from "cors";

import Event from "./models/events.js";
const app = express();

// Body parser middleware
app.use(bodyParser.json());
app.use(cors());
// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/eventsDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Route to add a new event
app.post("/events", (req, res) => {
  const { name, date, location } = req.body;

  const newEvent = new Event({
    name,
    date,
    location,
  });

  newEvent
    .save()
    .then((event) => res.json(event))
    .catch((err) => res.status(400).json({ error: err.message }));
});

// Route to get all events
app.get("/events", (req, res) => {
  Event.find()
    .then((events) => res.json(events))
    .catch((err) => res.status(400).json({ error: err.message }));
});

// Route to update registration status
app.put("/events/:id/register", (req, res) => {
  const eventId = req.params.id;
  Event.findByIdAndUpdate(eventId, { isRegistered: true }, { new: true })
    .then((event) => res.json(event))
    .catch((err) => res.status(400).json({ error: err.message }));
});

// Route to delete an event
app.delete("/events/:id", (req, res) => {
  const eventId = req.params.id;
  Event.findByIdAndDelete(eventId)
    .then(() => res.json({ message: "Event deleted successfully" }))
    .catch((err) => res.status(400).json({ error: err.message }));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
