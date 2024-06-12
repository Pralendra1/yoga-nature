// models/event.js

import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  isRegistered: {
    type: Boolean,
    default: false,
  },
});

const Event = mongoose.model("Event", eventSchema);

export default Event;
