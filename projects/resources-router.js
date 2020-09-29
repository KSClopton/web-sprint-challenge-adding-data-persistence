const express = require('express');
const db = require('../config-db');
const router = express.Router();


router.get('/', (req, res) => {
    // Getting list of resources
    db('resource')
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(error => {
        res.status(500).json({message: "Could not get your resources"})
    })
 })

router.post('/' , (req, res) => {
    // Adding resources
    newResource = req.body
    if(!newResource.name){
        res.status(404).json({message: "Please provide a name for the resource"})
    }else{
        db('resource')
        .insert(newResource, "id")
        .then(resource => {
            res.status(201).json({message: "The resource has been added"})
            res.json(resource)
        })
        .catch(error => {
            res.status(500).json({message: "Could not add the resource"})
        })
    }
})
module.exports = router;