import React from "react";
import ListingCard from "./ListingCard";
// import ListingCard from "./ListingCard";

function ListingsContainer({listings ,onDelete}) {
  
  return (
    <main>
      <ul className="cards">
       {listings.map((listing)=>(<ListingCard key={listing.id} listing={listing} onDelete={onDelete}/>))}
        {/* use the ListingCard component to display listings */}
      </ul>
    </main>
  );
}

export default ListingsContainer;
