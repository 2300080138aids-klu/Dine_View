import React, { useEffect, useState } from "react"
import { getRestaurants } from "../services/api"

function Leaderboard() {

  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {

    async function fetchRestaurants() {

      try {

        const res = await getRestaurants()

        const sorted = res.data.sort(
          (a, b) => (b.avg_rating||0) - (a.avg_rating||0)
        )

        setRestaurants(sorted)

      } catch (err) {
        console.error(err)
      }

    }

    fetchRestaurants()

  }, [])

  return (
    <div style={{ padding: "30px" }}>

      <h2>Top Restaurants</h2>

      {restaurants.map((r, index) => (
        <div
          key={r.id}
          style={{
            padding: "15px",
            margin: "10px 0",
            border: "1px solid #ddd",
            borderRadius: "10px"
          }}
        >
          <h3>#{index + 1} {r.name}</h3>
          <p>⭐ Rating: {r.avg_rating || 0}</p>
          <p>{r.city} • {r.cuisine}</p>
        </div>
      ))}

    </div>
  )
}

export default Leaderboard