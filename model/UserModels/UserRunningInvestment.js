import mongoose from "mongoose";
const schema = mongoose.Schema;

const InvestmentSchema = new schema(
  {
    user: {
      type: schema.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
    amount: {
      type: Number,
      min: "10",
    },
    duration: {
      type: Number,
      min: "30",
    },
    maturityDate: {
      type: Date,
    },
    status: {
      type: String,
      enum: ["running", "completed"],
      default: "running",
    },
  },
  { timestamps: true }
);

export default mongoose.model("UserInvestment", InvestmentSchema);
