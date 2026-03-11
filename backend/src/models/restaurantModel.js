const pool = require('../config/db');

const createRestaurant = async (data) => {
  const { name, city, cuisine, description, created_by } = data;

  const result = await pool.query(
    `INSERT INTO restaurants
     (name, city, cuisine, description, created_by)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING *`,
    [name, city, cuisine, description, created_by]
  );

  return result.rows[0];
};

const getAllRestaurants = async () => {
  const result = await pool.query(
    `SELECT * FROM restaurants ORDER BY created_at DESC`
  );
  return result.rows;
};

const getRestaurantById = async (id) => {
  const result = await pool.query(
    `SELECT * FROM restaurants WHERE id = $1`,
    [id]
  );
  return result.rows[0];
};

module.exports = {
  createRestaurant,
  getAllRestaurants,
  getRestaurantById
};