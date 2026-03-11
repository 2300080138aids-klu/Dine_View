import React,{ useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

import { Pie } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"

ChartJS.register(ArcElement, Tooltip, Legend)

export default function RestaurantDetails() {

  const { id } = useParams()

  const [restaurant, setRestaurant] = useState(null)
  const [analytics, setAnalytics] = useState([])
  const [rating, setRating] = useState(5)
  const [comment, setComment] = useState("")

  useEffect(() => {
    loadRestaurant()
    loadAnalytics()
  }, [])

  const loadRestaurant = async () => {
    try {

      const res = await axios.get(
        `http://localhost:5000/api/restaurants/${id}`
      )

      setRestaurant(res.data)

    } catch (err) {
      console.error(err)
    }
  }

  const loadAnalytics = async () => {
    try {

      const res = await axios.get(
        `http://localhost:5000/api/restaurants/${id}/analytics`
      )

      setAnalytics(res.data)

    } catch (err) {
      console.error(err)
    }
  }

  const submitReview = async () => {
    try {

      await axios.post(
        `http://localhost:5000/api/restaurants/${id}/reviews`,
        {
          rating: Number(rating),
          comment: comment
        }
      )

      alert("Review submitted")

      setComment("")
      setRating(5)

      loadAnalytics()

    } catch (err) {
      console.error(err)
      alert("Failed to submit review")
    }
  }

  const chartData = {
    labels: analytics.map(a => `${a.rating} Star`),
    datasets: [
      {
        data: analytics.map(a => a.count),
        backgroundColor: [
          "#ff6384",
          "#36a2eb",
          "#ffce56",
          "#4bc0c0",
          "#9966ff"
        ]
      }
    ]
  }

  if (!restaurant) {
    return (
      <div style={{padding:"40px",textAlign:"center"}}>
        <h2>Loading restaurant...</h2>
      </div>
    )
  }

  return (
    <div style={{padding:"20px",maxWidth:"700px",margin:"0 auto",textAlign:"center"}}>

      <h1>{restaurant.name}</h1>
      <p>{restaurant.city} | {restaurant.cuisine}</p>
      <p>{restaurant.description}</p>

      <h2>Rating Distribution</h2>

      <div style={{width:"400px",margin:"20px auto"}}>
        {analytics.length > 0 ? <Pie data={chartData}/> : <p>No reviews yet</p>}
      </div>

      <h2 style={{marginTop:"40px"}}>Write a Review</h2>

      <select
        value={rating}
        onChange={(e)=>setRating(e.target.value)}
      >
        <option value="5">5 Star</option>
        <option value="4">4 Star</option>
        <option value="3">3 Star</option>
        <option value="2">2 Star</option>
        <option value="1">1 Star</option>
      </select>

      <br/><br/>

      <textarea
        rows="4"
        cols="40"
        placeholder="Share your experience..."
        value={comment}
        onChange={(e)=>setComment(e.target.value)}
      />

      <br/><br/>

      <button onClick={submitReview}>
        Submit Review
      </button>

    </div>
  )
}