const router = require('express').Router()

//import model
const Grocery = require('../model/Grocery')

//Get all Groceries
router.get('/getAll', async (req,res)=>{
    try {
        //Remove createdAt, updateAt and __v  from json ouput
        const groceries = await  Grocery.find().select(["-createdAt", "-updatedAt","-__v"]).lean()
        res.json(groceries)
        
    } catch (error) {
        console.log(error)
        res.json({'error':'something went wrong'})  
    }
})

//Add GroceryItem
router.post('/add', async (req,res)=>{
    try {
        const data = req.body
        console.log("add", req.body.groceryItem)
        const grocery = new Grocery(data)
        await grocery.save()
        res.json({"result":"success"})
        
    } catch (error) {
        console.log(error)
        res.json({'error':'something went wrong'})  
    }

})

//Update  isPurchased
router.put('/updatePurchaseStatus', async (req,res)=>{
    const id = req.body._id
    const isPurchased = req.body.isPurchased
    // console.log("checking type of ispurchased",isPurchased)
    try {
        await Grocery.findByIdAndUpdate(
            id, { $set: {isPurchased:isPurchased} }, { new: true });
        res.json({
            'result':'success'
        })    
        
    } catch (error) {
        console.log(error)
        res.json({'error':'something went wrong'})  
    }

})

//Delete Grocery Item
router.delete('/deleteGroceryItem', async(req, res)=>{
    const id = req.body._id
    console.log(req.body)
    try {
        const getGroceryItem = await Grocery.findById(id)
        await getGroceryItem.remove()
        res.json({
            'result':'success'
        })
    } catch (error) {
        console.log(error)
        res.json({'error':'something went wrong'})    
    }
})

module.exports = router //Important