import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const AdminSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please provide first name"],
      maxlength: 20,
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Please provide last name"],
      maxlength: 20,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please provide your email"],
      validate: {
        validator: validator.isEmail,
        message: "Please provide a valid email address",
      },
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide password"],
      minlength: 8,
      select: false,
    },
    accountStatus: {
      type: String,
      enum: ["Verified", "Unverified", "Suspended", "Deleted", "Banned"],
      default: "Unverified",
    },
    adminRoleAssigned: {
        type: Boolean,
        default: false,
        required: true,
    },
    adminRole: {
      type: String,
      enum: ["superAdmin", "admin", "custerService", "accountManager"],
      default: "",
    },
    confirmationCode: {
      type: String,
      unique: true,
    },
    adminActivityPin: {
      type: Number,
      minlength: 4,
      maxlength: 4,
    },
  },
  { timestamps: true }
);

AdminSchema.pre("save", async function () {
  // console.log(this.modifiedPaths());
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

AdminSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

AdminSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

export default mongoose.model("Admin", AdminSchema);
