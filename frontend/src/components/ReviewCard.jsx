import { Link } from "react-router-dom";

export default function RestaurantCard({restaurant}){

 return(

  <div style={{border:"1px solid #ccc",padding:10,margin:10}}>

   <h3>{restaurant.name}</h3>

   <p>{restaurant.city}</p>

   <p>Rating: {restaurant.avg_rating}</p>

   <Link to={`/restaurant/${restaurant.id}`}>
     View
   </Link>

  </div>

 );
}