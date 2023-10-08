import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema(
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
    referralCode: {
      type: String,
      unique: true,
    },
    referredBy: {
      type: String,
      default: "No one",
    },
    accountVerified: {
      type: Boolean,
      default: false,
    },
    userType: {
      type: String,
      enum: ["admin", "investor"],
      default: "investor",
    },
    confirmationCode: {
      type: String,
      unique: true,
    },
    activityPin: {
      type: Number,
      minlength: 4,
      maxlength: 4,
    },
    adminActivityPin: {
      type: Number,
      minlength: 4,
      maxlength: 4,
    },
    userTag: {
      type: String,
      required: [true, "Please provide user tag"],
      maxlength: 16,
      unique: [true, "User tag already exists"],
    }
  },
  { timestamps: true }
);

UserSchema.pre("save", async function () {
  // console.log(this.modifiedPaths());
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

export default mongoose.model("User", UserSchema);