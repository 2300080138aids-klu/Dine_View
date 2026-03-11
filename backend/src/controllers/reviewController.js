const pool = require("../config/db")

exports.addReview = async (req, res) => {
  try {

    const restaurantId = Number(req.params.id)
    const rating = Number(req.body.rating)
    const comment = req.body.comment || ""

    if (!restaurantId) {
      return res.status(400).json({ message: "Invalid restaurant id" })
    }

    await pool.query(
      "INSERT INTO reviews (restaurant_id, rating, comment) VALUES ($1,$2,$3)",
      [restaurantId, rating, comment]
    )

    res.json({ message: "Review added successfully" })

  } catch (err) {
    console.error("Review insert error:", err)
    res.status(500).json({ message: "Server error" })
  }
}