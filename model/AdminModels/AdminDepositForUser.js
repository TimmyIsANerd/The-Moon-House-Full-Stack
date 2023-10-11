import mongoose from "mongoose";
const schema = mongoose.Schema;

const DepositForUserSchema = new schema(
  {
    user: {
      type: schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    refId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    handledBy: {
      type: schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("AdminDepositForUser", DepositForUserSchema);