import React, {useState,useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings,setListings] = useState([]);
  useEffect(()=>{
    fetch(`http://localhost:6001/listings`).then((r)=>r.json()).then((listings)=>{setListings(listings)});

  },[])

  function searchValue(search){
    setListings(listings.filter((listing)=>(listing.description.toLowerCase().includes(search))))
  }

  function handleDeleteListing(deletedListing){
    const updatedListings = (listings.filter((listing)=> listing.id !== deletedListing.id))
    setListings(updatedListings)
  }
  return (
    <div className="app">
      <Header searchValue={searchValue}/>
      <ListingsContainer listings={listings} onDelete={handleDeleteListing} />
    </div>
  );
}

export default App;
