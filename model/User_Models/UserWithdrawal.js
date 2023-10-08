import mongoose from "mongoose";
const schema = mongoose.Schema;

const WithdrawalSchema = new schema(
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
    },
    status: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "pending",
        required: true,
    },
  },
  { timestamps: true }
);
