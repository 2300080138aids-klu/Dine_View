import React, { useState } from "react"
import { Container, TextField, Button, Typography, Paper } from "@mui/material"
import { createRestaurant } from "../services/api"
import { useNavigate } from "react-router-dom"

export default function AddRestaurant(){

 const [name,setName] = useState("")
 const [city,setCity] = useState("")
 const [cuisine,setCuisine] = useState("")
 const [description,setDescription] = useState("")

 const navigate = useNavigate()

 const token = localStorage.getItem("token")

 const submitRestaurant = async () => {

  if(!token){
   alert("Please login first")
   return
  }

  try{

   await createRestaurant(
    {
     name,
     city,
     cuisine,
     description
    },
    token
   )

   alert("Restaurant added successfully")

   navigate("/dashboard")

  }catch(error){

   console.error(error)
   alert("Failed to add restaurant")

  }

 }

 return(

  <Container maxWidth="sm" sx={{ marginTop:6 }}>

   <Paper elevation={4} sx={{ padding:4 }}>

    <Typography variant="h4" gutterBottom>
     Add Restaurant
    </Typography>

    <TextField
     label="Restaurant Name"
     fullWidth
     margin="normal"
     value={name}
     onChange={(e)=>setName(e.target.value)}
    />

    <TextField
     label="City"
     fullWidth
     margin="normal"
     value={city}
     onChange={(e)=>setCity(e.target.value)}
    />

    <TextField
     label="Cuisine"
     fullWidth
     margin="normal"
     value={cuisine}
     onChange={(e)=>setCuisine(e.target.value)}
    />

    <TextField
     label="Description"
     fullWidth
     multiline
     rows={3}
     margin="normal"
     value={description}
     onChange={(e)=>setDescription(e.target.value)}
    />

    <Button
     variant="contained"
     fullWidth
     sx={{ marginTop:2 }}
     onClick={submitRestaurant}
    >
     Add Restaurant
    </Button>

   </Paper>

  </Container>

 )

}