const express = require("express")
const router = express.Router()

const {
  getRestaurants,
  createRestaurant,
  getRestaurantById,
  getAnalytics
} = require("../controllers/restaurantController")

const { addReview } = require("../controllers/reviewController")

// get all restaurants
router.get("/", getRestaurants)

// get single restaurant
router.get("/:id", getRestaurantById)

// analytics for chart
router.get("/:id/analytics", getAnalytics)

// create restaurant
router.post("/", createRestaurant)

// add review
router.post("/:id/reviews", addReview)

module.exports = router