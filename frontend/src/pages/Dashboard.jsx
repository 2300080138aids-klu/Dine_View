import React,{useEffect,useState} from "react"
import { Container, Typography, Grid, TextField } from "@mui/material"

import { getRestaurants } from "../services/api"
import RestaurantCard from "../components/RestaurantCard"

export default function Dashboard(){

 const [restaurants,setRestaurants]=useState([])
 const [search,setSearch]=useState("")

 useEffect(()=>{

  async function load(){
   const res = await getRestaurants()
   setRestaurants(res.data)
  }

  load()

 },[])

 const filtered = restaurants.filter(r =>
  r.name.toLowerCase().includes(search.toLowerCase())
 )

 return(

  <Container sx={{marginTop:5}}>

   <Typography variant="h4" gutterBottom>
    Restaurants
   </Typography>

   <TextField
    label="Search restaurants"
    fullWidth
    sx={{marginBottom:3}}
    onChange={(e)=>setSearch(e.target.value)}
   />

   <Grid container spacing={3}>

    {filtered.map(r=>(
     <Grid item xs={12} sm={6} md={4} key={r.id}>
       <RestaurantCard restaurant={r}/>
     </Grid>
    ))}

   </Grid>

  </Container>

 )

}