const express = require('express');
const router = express.Router();
const Task = require('../models/task.js');

//GET all tasks
router.get('/tasks',async(req,res)=>{
    try{
        const tasks = await Task.find({});
        res.status(200).json(tasks);
    }catch (error) {
        console.log({Alert: error.message});
        res.status(500).json({Alert: "ERROR"});
    }
})
//POST a task
router.post('/tasks',async(req,res)=>{
    try{
        const task = await Task.create(req.body);
        res.status(200).json(task);
    }catch (error) {
        console.log(error);
        res.status(500).json({ALert: error.message});
    }
})
//HTTP PUT: Updating an existing resource
router.put('/tasks/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const updateTask = await Task.findByIdAndUpdate(id, req.body);
        if(!updateTask){
            res.status(404).json({Alert: `Task with id ${id} does not exist`});
        }
        else{
            const newllyupdatedTask = await Task.findById(id);  
            res.status(200).json(updateTask);
        }
    }catch(error){
        console.log(error.message);
        res.status(500).json({ERROR: error.message});
    }
})

//GET a single task 
router.get('/tasks/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        const singleTask = await Task.findById(id);
        if(!singleTask){
            res.status(404).json({ERROR: error.message});
        }
        else{
            res.status(200).json(singleTask);
        }
    } catch (error) {
        console.log(error.message);
        res.json({ERROR:error.message})
    }
})

//HTTP delete: Delete an existing resource with the help of an object ID.
router.delete('/tasks/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        const deleteTask = await Task.findByIdAndDelete(id);

        if(!deleteTask){
            res.status(404).json({ERROR: `Task with ${id} not found`});
        }
        res.status(200).json(deleteTask);
    } catch (error) {
        console.log(error.message);
        res.json({ALERT: "DELETION FAILED!!!"});
    }
})

module.exports = router;