const pool = require("../config/db")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

exports.signup = async(req,res)=>{
 try{

 const {name,email,password} = req.body

 const hashed = await bcrypt.hash(password,10)

 const result = await pool.query(
 "INSERT INTO users(name,email,password) VALUES($1,$2,$3) RETURNING id,email",
 [name,email,hashed]
 )

 res.json(result.rows[0])

 }catch(err){
 res.status(500).json({message:"Server error"})
 }
}

exports.login = async(req,res)=>{
 try{

 const {email,password} = req.body

 const result = await pool.query(
 "SELECT * FROM users WHERE email=$1",[email]
 )

 const user = result.rows[0]

 if(!user){
 return res.status(400).json({message:"User not found"})
 }

 const match = await bcrypt.compare(password,user.password)

 if(!match){
 return res.status(400).json({message:"Invalid password"})
 }

 const token = jwt.sign(
 {id:user.id,email:user.email},
 process.env.JWT_SECRET,
 {expiresIn:"1d"}
 )

 res.json({token})

 }catch(err){
 res.status(500).json({message:"Server error"})
 }
}