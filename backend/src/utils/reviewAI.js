exports.analyzeReview = (text)=>{

 if(!text) return 0

 const positive = ["good","great","amazing","excellent","tasty"]
 const negative = ["bad","worst","terrible","awful"]

 let score = 0

 positive.forEach(w=>{
  if(text.toLowerCase().includes(w)) score++
 })

 negative.forEach(w=>{
  if(text.toLowerCase().includes(w)) score--
 })

 return score
}