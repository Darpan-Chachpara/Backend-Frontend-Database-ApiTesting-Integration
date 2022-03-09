const express = require('express')
const router = express.Router()
const Task = require('../models/task')


router.get('/', async(req,res) => {
    try{
           const task = await Task.find()
           res.json(task)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const task = await Task.findById(req.params.id)
           res.json(task)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const task = new Task({
        fruit_name: req.body.fruit_name,
        unit_price: req.body.unit_price,
        weight: req.body.weight
    })

    try{
        const a1 =  await task.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const task = await Task.findById(req.params.id) 
        task.fruit_name = req.body.fruit_name
        task.unit_price = req.body.unit_price
        task.weight = req.body.weight
        const a1 = await task.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

router.delete('/:id',async(req,res)=> {
    try{
        const task = await Task.findById(req.params.id)
        const a1 = await task.remove()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

module.exports = router