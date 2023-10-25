// Import Express
import express from "express";

// Import Express Router
const router = express.Router();
import {
  admin_dashboard_get,
  admin_signup_get,
  admin_signup_post,
  admin_get,
  admin_post,
  admin_dashboard_create_user,
  admin_dashboard_delete_user,
  admin_dashboard_editUserInformation,
  admin_dashboard_createUserPortfolio,
  send_notification_get,
  send_notification_post,
} from "../controllers/adminController.js";

// Setup Routes for Admin
// Admin Sign Up GET
router.get("/admin/signup", admin_signup_get);
// Admin Sign Up POST
router.get("/admin/signup", admin_signup_post);
// Admin GET Login
router.get("/admin/login", admin_get);
// Admin POST Login
router.post("/", admin_post);
// Admin Dashboard
router.get("/admin/dashboard", admin_dashboard_get);
// Admin POST Create New User
router.post("/admin/dashboard/createuser", admin_dashboard_create_user);
// Admin DELETE User
router.delete("/admin/dashboard/deleteuser/:id", admin_dashboard_delete_user);
// Admin POST Set Kyc Information
router.post(
  "/admin/dashboard/edituserkycData/:id",
  admin_dashboard_editUserInformation
);
// Admin Create User Portfolio
router.post(
  "/admin/createuserportfiolio/:id",
  admin_dashboard_createUserPortfolio
);

// User Notification
router.get("/admin/sendnotification", send_notification_get);
router.post("/admin/sendnotification", send_notification_post);

export default router;
