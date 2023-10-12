import mongoose from "mongoose";
const schema = mongoose.Schema;

const NextOfKinSchema = new schema(
    {
      kinFirstName: {
        type: String,
        required: true,
      },
      kinLastName: {
        type: String,
        required: true,
      },
      kinEmail: {
        type: String,
        required: true,
      },
      kinPhoneNumber: {
        type: Number,
      },
      kinAddress: {
        type: String,
      },
      kinPostalCode: {
        type: String,
      },
      KinCity: {
        type: String,
      },
      kinCountry: {
        type: String,
      },
      kinTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Please provide user"],
      }
    },
    { timestamps: true }
);

export default mongoose.model("UserNextOfKin", NextOfKinSchema);