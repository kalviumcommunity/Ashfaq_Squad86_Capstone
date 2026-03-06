import mongoose from "mongoose";

const DestinationSchema = new mongoose.Schema({
  name: String,
  country: String,
  description: String,
  price: Number,

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Destination =
  mongoose.models.Destination ||
  mongoose.model("Destination", DestinationSchema);

export default Destination;