const express = require("express");

const { validateBody, authenticate } = require("../../middlewares");
const { ctrlWrapper } = require("../../helpers");
const { schemas } = require("../../models/user");
const ctrl = require("../../controllers/auth");
const router = express.Router();
router.post(
  "/singup",
  validateBody(schemas.singupSchema),
  ctrlWrapper(ctrl.singup)
);
router.post(
  "/login",
  validateBody(schemas.loginSchema),
  ctrlWrapper(ctrl.login)
);
router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));
router.get("/logout", authenticate, ctrlWrapper(ctrl.logout));
module.exports = router;
