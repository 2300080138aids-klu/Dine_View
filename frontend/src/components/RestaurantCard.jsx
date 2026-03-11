import React from "react"
import { Card, CardContent, Typography, Button } from "@mui/material"
import { Link } from "react-router-dom"

export default function RestaurantCard({restaurant}){

 return(

  <Card
   sx={{
    height:"100%",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",

    borderRadius:3,
    boxShadow:3,

    transition:"0.3s",

    "&:hover":{
      transform:"translateY(-6px)",
      boxShadow:8
    }
   }}
  >

   <CardContent>

    <Typography variant="h6">
     {restaurant.name}
    </Typography>

    <Typography color="text.secondary">
     {restaurant.city}
    </Typography>

    <Typography sx={{marginTop:1}}>
     ⭐ {restaurant.avg_rating}
    </Typography>

   </CardContent>

   <Button
    component={Link}
    to={`/restaurant/${restaurant.id}`}
    variant="contained"
    sx={{margin:2}}
   >
    View Details
   </Button>

  </Card>

 )

}