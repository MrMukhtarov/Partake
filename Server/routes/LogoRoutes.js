const express = require("express");
const router = express.Router();
const LogoRoutes = require("../controllers/LogoController.js");

router.get("/", LogoRoutes.getAllLogo);
router.post("/", LogoRoutes.addLogo);
router.get("/id", LogoRoutes.getById);
router.put("/id", LogoRoutes.updateLogo);
router.delete("/id", LogoRoutes.deleteLogo);

module.exports = router;
