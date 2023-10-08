import mongoose from "mongoose";
const schema = mongoose.Schema;

const DepositSchema = new schema(
  {
    user: {
      type: schema.Types.ObjectId,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    refId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("UserDeposit", DepositSchema);
