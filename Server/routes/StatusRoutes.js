const express = require("express");
const router = express.Router();
const StatusRoutes = require("../controllers/StatusController.js");

router.get("/", StatusRoutes.getAllStatus);
router.post("/", StatusRoutes.addStatus);
router.get("/id", StatusRoutes.getById);
router.put("/id", StatusRoutes.updateStatus);
router.delete("/id", StatusRoutes.deleteStatus);

module.exports = router;
