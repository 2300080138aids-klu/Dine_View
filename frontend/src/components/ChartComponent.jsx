import React from "react"
import {PieChart,Pie,Cell,Tooltip,Legend,ResponsiveContainer} from "recharts"

export default function ChartComponent({data}){

 const COLORS=["#ff4d4f","#ffa940","#ffd666","#73d13d","#40a9ff"]

 const formatted=data.map(d=>({
  name:`${d.rating}★`,
  value:d.percent
 }))

 return(

  <ResponsiveContainer width="100%" height={320}>

   <PieChart>

    <Pie
     data={formatted}
     dataKey="value"
     nameKey="name"
     outerRadius={110}
     label={({name,value})=>value?`${name} ${value.toFixed(0)}%`:""}
    >

     {formatted.map((entry,index)=>(
      <Cell key={index} fill={COLORS[index]}/>
     ))}

    </Pie>

    <Tooltip formatter={(v)=>`${v.toFixed(1)}%`}/>
    <Legend/>

   </PieChart>

  </ResponsiveContainer>

 )
}