import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Card.css'
import CardItem from './CardItem';

const Card = () => {
  const [groceries, setGroceries] = useState([])
  const [groceryItem, setGroceryItem] = useState("")
  
  const fetchAllGroceries = async ()=>{
     const res = await axios.get("/grocery/getAll")
    //  console.log("my data", res)
     setGroceries(res.data)

  }
  
  useEffect(() => {
    fetchAllGroceries()
  
  }, [])
  

  const handleSubmit = async (e) =>{
   e.preventDefault()
   let formData = new FormData()
   formData.append('groceryItem', groceryItem)
   formData.append('isPurchased', false)
   //await axios.post('/grocery/add',{groceryItem: groceryItem, isPurchased:false})
  //  console.log(Object.fromEntries(formData))
  
  //formData produces json object, hence we are converting it to object before sending orelse it will not work
   await axios.post('/grocery/add',Object.fromEntries(formData))
   setGroceryItem("")
   fetchAllGroceries()

   //Display the key/value pairs
  // for (var pair of form_data.entries()) {
  // console.log(pair[0]+ ', ' + pair[1]); 
  // }

  }

  return (
    
    <div className="cardContainer">
      <form  onSubmit={handleSubmit}>
      <input
        type="text"
        value={groceryItem}
        name="input_text"
        id="input_text"
        placeholder="Add Shopping Item"
        onChange={(e)=>setGroceryItem(e.target.value)}
      />
     {/* <input type="submit" hidden /> */}
      </form>
      {
      groceries.map((grocery)=>{
        return (<CardItem grocery={grocery} key={grocery._id} fetchAllGroceries={fetchAllGroceries}/>)
      })
      
      }
    </div>
  );
};

export default Card;
