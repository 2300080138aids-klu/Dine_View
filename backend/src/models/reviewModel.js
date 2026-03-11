const pool = require('../config/db');


exports.findReview = async (userId, restaurantId) => {

  const result = await pool.query(
    `SELECT *
     FROM reviews
     WHERE user_id = $1
     AND restaurant_id = $2`,
    [userId, restaurantId]
  );

  return result.rows[0];

};



exports.createReview = async (client, data) => {

  const result = await client.query(
    `INSERT INTO reviews
     (user_id, restaurant_id, rating, review_text, sentiment_score, fake_probability)
     VALUES ($1,$2,$3,$4,$5,$6)
     RETURNING *`,
    [
      data.user_id,
      data.restaurant_id,
      data.rating,
      data.review_text,
      data.sentiment_score,
      data.fake_probability
    ]
  );

  return result.rows[0];

};



exports.updateReview = async (client, data) => {

  const result = await client.query(
    `UPDATE reviews
     SET rating=$3,
         review_text=$4,
         sentiment_score=$5,
         fake_probability=$6,
         updated_at=CURRENT_TIMESTAMP
     WHERE user_id=$1
     AND restaurant_id=$2
     RETURNING *`,
    [
      data.user_id,
      data.restaurant_id,
      data.rating,
      data.review_text,
      data.sentiment_score,
      data.fake_probability
    ]
  );

  return result.rows[0];

};



exports.recalculateRestaurantRating = async (client, restaurantId) => {

  const result = await client.query(
    `SELECT
        AVG(rating) AS avg,
        COUNT(*) AS total
     FROM reviews
     WHERE restaurant_id=$1`,
    [restaurantId]
  );

  const avg = result.rows[0].avg;
  const total = result.rows[0].total;

  await client.query(
    `UPDATE restaurants
     SET avg_rating=$1,
         total_reviews=$2
     WHERE id=$3`,
    [avg, total, restaurantId]
  );

};



exports.getReviewsByRestaurant = async (restaurantId) => {

  const result = await pool.query(
    `SELECT *
     FROM reviews
     WHERE restaurant_id=$1`,
    [restaurantId]
  );

  return result.rows;

};