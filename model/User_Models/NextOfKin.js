import mongoose from "mongoose";

const NextOfKin = new mongoose.Schema(
    {
      KinfirstName: {
        type: String,
        required: true,
      },
      KinlastName: {
        type: String,
        required: true,
      },
      Kinemail: {
        type: String,
        required: true,
      },
      KinphoneNumber: {
        type: Number,
      },
      Kinaddress: {
        type: String,
      },
      KinPostalCode: {
        type: String,
      },
      KinCity: {
        type: String,
      },
      KinCountry: {
        type: String,
      },
    },
    { timestamps: true }
);

export default mongoose.model("NextOfKin", nextOfKinInformationSchema);