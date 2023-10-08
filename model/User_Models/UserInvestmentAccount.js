import mongoose from "mongoose";
const schema = mongoose.Schema;

const InvestmentAccountSchema = new schema(
    {
      // Account Balance
      accountBalance: {
        type: Number,
        default: 0,
        min: 0,
      },
      // Invested Amount
      totalInvestedAmount: {
        type: Number,
        default: 0,
        min: 0,
      },
      // ROI
      totalROI: {
        type: Number,
        default: 0,
        min: 0,
      },
      // Referal System
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