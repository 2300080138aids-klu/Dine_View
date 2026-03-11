import React from "react"
import { Container, Typography, Button } from "@mui/material"
import { Link } from "react-router-dom"

export default function Home(){

 return(

  <Container sx={{marginTop:10,textAlign:"center"}}>

   <Typography variant="h3">
     DineView
   </Typography>

   <Typography sx={{marginTop:2}}>
     AI Powered Restaurant Discovery Platform
   </Typography>

   <Button
    variant="contained"
    component={Link}
    to="/dashboard"
    sx={{marginTop:4}}
   >
    Explore Restaurants
   </Button>

  </Container>

 )

}