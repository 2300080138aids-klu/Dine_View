import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import Leaderboard from "./pages/Leaderboard"
import RestaurantDetails from "./pages/RestaurantDetails"
import AddRestaurant from "./pages/AddRestaurant"

function App(){

 return(

  <BrowserRouter>

   <Navbar/>

   <Routes>

    <Route path="/" element={<Home/>} />

    <Route path="/login" element={<Login/>} />

    <Route path="/signup" element={<Signup/>} />

    <Route path="/dashboard" element={<Dashboard/>} />

    <Route path="/leaderboard" element={<Leaderboard/>} />

    <Route path="/restaurant/:id" element={<RestaurantDetails/>} />

    <Route path="/add-restaurant" element={<AddRestaurant/>} />

   </Routes>

  </BrowserRouter>

 )

}

export default App