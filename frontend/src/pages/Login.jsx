import React from "react"
import { useState } from "react";
import { login } from "../services/api";
import { TextField, Button, Container, Typography } from "@mui/material";

export default function Login() {

 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");

 const handleLogin = async () => {

  const res = await login({ email, password });

  localStorage.setItem("token", res.data.token);

  alert("Login successful");

 };

 return (

  <Container maxWidth="sm">

   <Typography variant="h4" sx={{ marginTop: 4 }}>
     Login
   </Typography>

   <TextField
     fullWidth
     label="Email"
     margin="normal"
     onChange={e => setEmail(e.target.value)}
   />

   <TextField
     fullWidth
     label="Password"
     type="password"
     margin="normal"
     onChange={e => setPassword(e.target.value)}
   />

   <Button
     variant="contained"
     fullWidth
     sx={{ marginTop: 2 }}
     onClick={handleLogin}
   >
     Login
   </Button>

  </Container>

 );
}