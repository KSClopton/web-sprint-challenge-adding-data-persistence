const express = require('express');
const db = require('../config-db');
const router = express.Router();


router.get('/', (req, res) => {
    // Getting list of tasks
    db('tasks')
    .then(tasks => {
        res.status(200).json(tasks)
    })
    .catch(error => {
        res.status(500).json({message: "Could not retrieve your tasks"})
    })
 })

 router.post('/:id' , (req, res) => {
    // Adding tasks
    const newTask = req.body
    const {id} = req.params

    if(!newTask.description){
        res.status(404).json({message: "Please provide a description for the task"})
    }else{
        db('projects')
        .where({id})
        .then(project => {
            if(!project){
                res.status(404).json({message: "This project does not exist"})
            }else{
                db('tasks')
                .insert(newTask)
                .then(task => {
                    res.status(201).json({message: "The task was created"})
                })
                .catch(error => {
                    res.status(500).json({message: "Could not add the task"})
                })
            }
        })
    }
})
// db('projects')
// .insert(newProject, "id")
// .then(project => {
//     res.status(201).json({message: "Project has been added"})
//     res.json(project)
// })
// .catch(error => {
//     res.status(500).json({message: "Could not add the project"})
// })

module.exports = router;