import React, { useState } from "react";

function ListingCard({listing ,onDelete}) {
  const {image, description, location} = listing;
  const [fav,setFav] = useState(false)
  function favClick(){
    setFav(!fav)
  }
  function handleDelete(){
    fetch(`http://localhost:6001/listings/${listing.id}`,{method:"DELETE"}).then((r)=>r.json()).then(()=>onDelete(listing));
    }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {(fav) ? (
          <button className="emoji-button favorite active" onClick={favClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={favClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
