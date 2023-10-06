import mongoose from "mongoose";

const userDataSchema = new mongoose.Schema(
    {
      // User Sign Up
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      email: { type: String, required: true, unique: true, lowercase: true },
      password: { type: String, required: true, minlength: 8 },
      status: {
        type: String,
        enum: ["Pending", "Active"],
        default: "Pending",
      },
      fundAccVerification: {
        type: String,
        option: ["Verified", "Unverified"],
        default: "Unverified",
      },
      userType: {
        type: String,
        enum: ["student", "admin", "investor"],
        default: "investor",
      },
      confirmationCode: {
        type: String,
        unique: true,
      },
      referalCode: {
        type: String,
        unique: true,
      },
      // Account Investment Data
      investorAccount: [investorAccountSchema],
      // User Contact Information
      userContactInformation: [userContactInformationSchema],
      // Next Of Kin Information
      nextOfKinInformation: [nextOfKinInformationSchema],
      // Withdrawal Information
      withdrawalInfo: [withdrawalInfoSchema],
      // User Notifications
      userNotifications: [userNotificationsSchema],
    },
    { collection: "user_data_signup" },
    { timestamps: true }
);

export default mongoose.model("userData", userDataSchema);
