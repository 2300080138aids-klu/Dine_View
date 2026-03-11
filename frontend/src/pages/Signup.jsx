import React, { useState } from "react";
import { Container, TextField, Button, Typography, Paper } from "@mui/material";
import { signup } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async () => {

    try {

      await signup({
        name,
        email,
        password
      });

      alert("Account created successfully");

      navigate("/login");

    } catch (err) {

      alert("Signup failed");

    }

  };

  return (

    <Container maxWidth="sm" sx={{ marginTop: 8 }}>

      <Paper elevation={4} sx={{ padding: 4 }}>

        <Typography variant="h4" gutterBottom align="center">
          Create Account
        </Typography>

        <Typography
          variant="body2"
          align="center"
          sx={{ marginBottom: 2 }}
        >
          Join DineView to review and discover restaurants
        </Typography>

        <TextField
          label="Full Name"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{ marginTop: 2 }}
          onClick={handleSignup}
        >
          Sign Up
        </Button>

      </Paper>

    </Container>

  );

}