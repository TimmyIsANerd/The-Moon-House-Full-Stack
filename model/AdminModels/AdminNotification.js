import mongoose from "mongoose";
const schema = mongoose.Schema;

const NotificationSchema = new schema(
  {
    admin: {
      type: schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    read: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("AdminNotification", NotificationSchema);