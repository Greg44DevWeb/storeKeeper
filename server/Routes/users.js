const express = require("express"); // express Method
const router = express.Router(); // Router initialization
const {signup, updateUser, deleteUser} = require('../controllers/userController');
const password = require('../middlewares/password');

//*** USER ROUTES ***//

router.post("/signup", password, signup); // only superAdmin can reach this endpoint to give a temporary password
router.put("/:id", updateUser); // only superAdmin can reach this endpoint
router.delete("/:id", deleteUser); // only superAdmin can reach this endpoint
// router.post("login", ""); // for all users
// router.get("/getAllUsers", ""); // only superAdmin can reach this endpoint
// router.get("/getOneUser/:id", ""); // only superAdmin can reach this endpoint
// router.post("/createOneUser", ""); // only superAdmin can reach this endpoint
// router.put("/updateOneUser/:id", ""); // only superAdmin can reach this endpoint
// router.put("/modifyPassword/:id", ""); // superAdmin for all, users for them
// router.delete("/deleteoneUser/:id", ""); // only superAdmin can reach this endpoint

module.exports = router;
