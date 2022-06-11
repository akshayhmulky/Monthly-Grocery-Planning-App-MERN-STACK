import React from 'react'

import axios from 'axios'

import './CardItem.css'
const CardItem = ({grocery, fetchAllGroceries}) => {

 const setIsPurchased = async (grocery) =>{
    await axios.put('/grocery/updatePurchaseStatus',{ _id:  grocery._id, isPurchased:true})
    fetchAllGroceries()
 }

 const deleteGroceryItem = async(grocery) =>{
   //for delete you need to add ---> {data: {_id:  grocery._id}}
    await axios.delete('/grocery/deleteGroceryItem',{data: {_id:  grocery._id}})
    fetchAllGroceries()
 }

  return (
    <div className="card_item">
        <ul>
            <li className="list_style">
                
                <span  className={grocery.isPurchased==="true"?"strikme":"nostrike"}>{grocery.groceryItem}</span>
                <div className="list_button">
                    <button type="submit" onClick={()=>setIsPurchased(grocery)}>Purchased</button>
                    <button type="submit" onClick={()=>deleteGroceryItem(grocery)}>X</button>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default CardItem