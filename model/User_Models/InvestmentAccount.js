import mongoose from "mongoose";

const InvestmentAccount = new mongoose.Schema(
    {
      // Account Balance
      accountBalance: {
        type: Number,
        default: 0,
        min: 0,
      },
      // Deposits
      deposits: {
        depositEntry: [
          {
            amount: { type: Number, default: 0, min: 0 },
            transactionDate: { type: String },
            transactionType: {
              type: String,
              option: ["Bank Deposit", "USDT"],
            },
          },
        ],
      },
      // ROI
      ROI: {
        accountBalance: 0,
        ROIEntry: [
          {
            amount: { type: Number, default: 0, min: 0 },
            transactionDate: { type: String },
            payOutDate: { type: String },
            investmentPackage: {
              type: String,
              option: ["VIP", "Exclusive"],
            },
          },
        ],
      },
      // Invested
      Invested: {
        accountBalance: 0,
        investmentEntry: [
          {
            amount: { type: Number, default: 0, min: 0 },
            transactionDate: { type: String },
            investmentPackage: {
              type: String,
              option: ["VIP", "Exclusive"],
            },
          },
        ],
      },
      // Referal System
      Referal: {
        accountBalance: 0,
        amount: { type: Number, default: 0, min: 0 },
        transactionDate: { type: String },
        payoutOption: ["Bank Deposit", "USDT"],
        referals: { type: Array },
      },
    },
    { timestamps: true }
);

export default mongoose.model("InvestmentAccount", InvestmentAccount);