const pool = require("../config/db")

exports.getRestaurants = async (req, res) => {
  try {

    const result = await pool.query(`
      SELECT r.*,
      COALESCE(AVG(rv.rating),0) AS avg_rating,
      COUNT(rv.id) AS review_count
      FROM restaurants r
      LEFT JOIN reviews rv
      ON r.id = rv.restaurant_id
      GROUP BY r.id
      ORDER BY r.id
    `)

    res.json(result.rows)

  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "Server error" })
  }
}

exports.getRestaurantById = async (req, res) => {
  try {

    const id = req.params.id

    const result = await pool.query(
      "SELECT * FROM restaurants WHERE id=$1",
      [id]
    )

    res.json(result.rows[0])

  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "Server error" })
  }
}

exports.getAnalytics = async (req, res) => {
  try {

    const id = req.params.id

    const result = await pool.query(`
      SELECT rating, COUNT(*) as count
      FROM reviews
      WHERE restaurant_id=$1
      GROUP BY rating
      ORDER BY rating
    `,[id])

    res.json(result.rows)

  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "Server error" })
  }
}

exports.createRestaurant = async (req, res) => {
  try {

    const { name, city, cuisine, description } = req.body

    const result = await pool.query(
      "INSERT INTO restaurants(name,city,cuisine,description) VALUES($1,$2,$3,$4) RETURNING *",
      [name,city,cuisine,description]
    )

    res.json(result.rows[0])

  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "Server error" })
  }
}