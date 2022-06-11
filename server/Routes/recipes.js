const express = require("express"); // express Method
const router = express.Router(); // Router initialization

//*** RECIPES ROUTES ***//

router.get("/getAllRecipes", ""); // for all users
router.get("/getOneRecipes/:id", ""); // for all users
router.post("/createOneRecipe", ""); // Only superAdmin, StoreKeeper, teacher can create
router.put("/updateOneRecipe/:id", ""); // Only superAdmin, StoreKeeper, Teacher
router.delete("/deleteoneRecipe/:id", ""); // Only superAdmin, StoreKeeper

module.exports = router;