import mongoose from "mongoose";
const schema = mongoose.Schema;

const WithdrawalApprovalSchema = new schema(
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
    approveBy: {
      type: schema.Types.ObjectId,
      ref: "Admin",
      required: [true, "Please provide admin id"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("AdminWithdrawalApproval", WithdrawalApprovalSchema);
