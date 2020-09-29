const express = require('express');
const useProject = require('./projects/projects-router')
const useResource = require('./projects/resources-router')
const useTask = require('./projects/tasks-router')

const server = express();
server.use(express.json())
server.use('/api/projects', useProject)
server.use('/api/resources', useResource)
server.use('/api/tasks', useTask)

const PORT = 4000;

server.listen(PORT, () => {
    console.log(`\n*** API running on port ${PORT} ***\n`)
})