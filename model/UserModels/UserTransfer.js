import mongoose from "mongoose";
const schema = mongoose.Schema;

const TransferSchema = new schema(
  {
    user: {
      type: schema.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
    amount: {
      type: Number,
      required: [true, "Please provide amount"],
    },
    receiver: {
      type: schema.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide receiver"],
    },
    transactionId: {
      type: String,
      required: [true, "Please provide transactionId"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("UserTransfer", TransferSchema);