import mongoose from "mongoose";
const schema = mongoose.Schema;

const RunningInvestmentSchema = new schema(
  {
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
    investedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("UserRunningInvestment", RunningInvestmentSchema);
