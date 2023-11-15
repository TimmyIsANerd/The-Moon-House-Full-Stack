import mongoose from "mongoose";
const schema = mongoose.Schema;

const InvestmentAccountSchema = new schema(
    {
      user:{
        type: schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      accountBalance: {
        type: Number,
        default: 0,
        min: 0,
      },
      totalInvestedAmount: {
        type: Number,
        default: 0,
        min: 0,
      },
      totalROI: {
        type: Number,
        default: 0,
        min: 0,
      },
      referralBonus: {
        type: Number,
        default: 0,
        min: 0,
      },
      lifeTimeReferralBonus: {
        type: Number,
        default: 0,
        min: 0,
      },
      walletAddress: {
        type: String,
        default: "",
      },
    },
    { timestamps: true }
);

export default mongoose.model("UserInvestmentAccount", InvestmentAccountSchema);