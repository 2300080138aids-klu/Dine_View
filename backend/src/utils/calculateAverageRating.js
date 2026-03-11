const db = require("../config/db")

const calculateAverageRating = async (restaurantId) => {

 const result = await db.query(
  `SELECT AVG(rating) AS avg, COUNT(*) AS total
   FROM reviews
   WHERE restaurant_id=$1`,
  [restaurantId]
 )

 const avg = result.rows[0].avg || 0
 const total = result.rows[0].total || 0

 await db.query(
  `UPDATE restaurants
   SET avg_rating=$1,
       total_reviews=$2
   WHERE id=$3`,
  [avg,total,restaurantId]
 )

}

module.exports = calculateAverageRating