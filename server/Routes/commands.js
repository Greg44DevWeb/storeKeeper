const express = require("express"); // express Method
const router = express.Router(); // Router initialization

//*** COMMANDS ROUTES ***//

router.get("/getAllCommand", ""); // Only superAdmin, StoreKeeper
router.get("/getOneCommandt/:id", ""); // Only superAdmin, StoreKeeper
router.post("/createOneCommand", ""); // Only superAdmin, StoreKeeper
router.put("/updateOneCommand/:id", ""); // Only superAdmin, StoreKeeper
router.delete("/deleteoneCommand/:id", ""); // Only superAdmin 

module.exports = router;