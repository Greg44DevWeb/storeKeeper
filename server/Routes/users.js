const express = require("express"); // express Method
const router = express.Router(); // Router initialization


//*** USER ROUTES ***//

router.post("/signup", ""); // only superAdmin can reach this endpoint to give a temporary password
router.post("login", ""); // for all users
router.get("/getAllUsers", ""); // only superAdmin can reach this endpoint
router.get("/getOneUser/:id", ""); // only superAdmin can reach this endpoint
router.post("/createOneUser", ""); // only superAdmin can reach this endpoint
router.put("/updateOneUser/:id", ""); // only superAdmin can reach this endpoint
router.put("/modifyPassword/:id", ""); // superAdmin for all, users for them
router.delete("/deleteoneUser/:id", ""); // only superAdmin can reach this endpoint

module.exports = router;
