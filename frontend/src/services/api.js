import axios from "axios"

const API = axios.create({
 baseURL: "http://localhost:5000/api"
})

export const signup = (data) =>
 API.post("/auth/signup", data)

export const login = (data) =>
 API.post("/auth/login", data)

export const getRestaurants = () =>
 API.get("/restaurants")

export const getRestaurant = (id) =>
 API.get(`/restaurants/${id}`)

export const getAnalytics = (id) =>
 API.get(`/restaurants/${id}/analytics`)

export const createRestaurant = (data, token) =>
 API.post("/restaurants", data, {
  headers: { Authorization: 'Bearer ${token}' }
 })

export const addReview = (restaurantId, review, token) =>
 API.post(
  '/restaurants/${restaurantId}/reviews',
  review,
  {
   headers: {
    Authorization: 'Bearer ${token'}
   }
 )