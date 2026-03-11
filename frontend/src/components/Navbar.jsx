import React from "react"
import { AppBar, Toolbar, Typography, Button } from "@mui/material"
import { Link } from "react-router-dom"

export default function Navbar(){

 const token = localStorage.getItem("token")

 const logout = ()=>{
  localStorage.removeItem("token")
  window.location = "/"
 }

 return(

  <AppBar position="static">

   <Toolbar>

    <Typography variant="h6" sx={{flexGrow:1}}>
      DineView
    </Typography>

    <Button color="inherit" component={Link} to="/">
     Home
    </Button>

    <Button color="inherit" component={Link} to="/dashboard">
     Restaurants
    </Button>

    <Button color="inherit" component={Link} to="/leaderboard">
     Leaderboard
    </Button>

    {token && (
     <Button color="inherit" component={Link} to="/add-restaurant">
      Add Restaurant
     </Button>
    )}

    {!token && (
     <>
      <Button color="inherit" component={Link} to="/login">
       Login
      </Button>

      <Button color="inherit" component={Link} to="/signup">
       Signup
      </Button>
     </>
    )}

    {token && (
     <Button color="inherit" onClick={logout}>
      Logout
     </Button>
    )}

   </Toolbar>

  </AppBar>

 )

}