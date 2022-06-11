const express = require("express"); // express Method
const router = express.Router(); // Router initialization

//*** PRODUCTS ROUTES ***//

router.get("/getAllProducts", ""); // for all users
router.get("/getOneProduct/:id", ""); // for all users
router.get("/getOneProductByCategory/category/:id", ""); // for all users
router.post("/createOneProduct", ""); // Only superAdmin, StoreKeeper, teacher can create
router.put("/updateOneProduct/:id", ""); // Only superAdmin, StoreKeeper
router.delete("/deleteoneProduct/:id", ""); // Only superAdmin, StoreKeeper

module.exports = router;