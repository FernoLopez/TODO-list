const express = 
require('express');
const taskRouter = 
require('./tasks/tasks.router').router

const app = express() 

app.use(express.json())

app.use('/api/v1', taskRouter)

app.listen(8000, () => {
    console.log('server started at port 8000')
})