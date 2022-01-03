const router = require("express").Router();
const { cardController } = require("./controllers/cardController.js");

//Card CRUD
router.post("cards", cardController.makeCard()); //Create
router.get("cards"); //Read
router.put("cards"); //Update
router.delete("cards"); //Delete
