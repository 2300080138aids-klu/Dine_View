const express = require("express")
const router = express.Router()

const reviewController = require("../controllers/reviewController")

router.post("/:restaurantId",reviewController.addReview)

module.exports = router