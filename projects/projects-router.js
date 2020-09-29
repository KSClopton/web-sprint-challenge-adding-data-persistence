const express = require('express');
const db = require('../config-db');
const router = express.Router();

// The list of tasks should include the project name and project description.

 router.get('/', (req, res) => {
    // Getting list of projects
    db('projects')
    .then(projects => {
        // res.status(200).json({message: "Here are your projects"})
        res.json(projects)
    })
    .catch(error => {
        res.status(500).json({message: "There was an error getting your projects"})
    })
 })
 // Checked!
 router.post('/', (req, res) => {
    // Adding projects
    const newProject = req.body

    if(!newProject.name){
        res.status(404).json({message: 'Plese provide a name for the project'})
    }else{
        db('projects')
        .insert(newProject, "id")
        .then(project => {
            res.status(201).json({message: "Project has been added"})
            res.json(project)
        })
        .catch(error => {
            res.status(500).json({message: "Could not add the project"})
        })
    }
 })
// Checked!
module.exports = router;