const { 
    getAllTasks, 
    getTaskById, 
    createTask, 
    deleteTask, 
    updateTask 
} = require("./tasks.controllers")

const getAll = (req, res) => {
    const data = getAllTasks()
    res.status(200).json({
        items: data.length,
        response: data
    })
}

const getById = (req, res) => {
    const id = Number(req.params.id)

    if (id) {
        const data = getTaskById(id)
        if (data.id) {
            res.status(200).json(data)
        } else {
            res.status(400).json({ message: 'Invalid ID' })
        }
    } else {
        res.status(400).json({ message: 'Id is not a number' })
    }
}

const create = (req, res) => {
    const data = req.body
    if (data.task && data.description && data.hour && data.priority && data.state) {
        const response = createTask(data)
        res.status(201).json(response)
    }
    else {
        res.status(400).json({ message: "Invalid Arguments" })
    }
}

const deleteById = (req, res) => {
    const id = Number(req.params.id)
    if (typeof id === 'number') {
        const deleted = deleteTask(id)
        if (deleted) {
            res.status(204).json()
        } else {
            res.status(400).json({ message: 'Try with another ID' })
        }
    } else {
        res.status(400).json({ message: 'Invalid ID' })
    }
}

const update = (req, res) => {
    const id = Number(req.params.id)
    const data = req.body
    if (data.task && data.description && data.hour && data.priority && data.state) {
        const response = updateTask(id, data)
        res.status(201).json({ message: "User edited succesfully", data: response })
    }
    else {
        res.status(400).json({ message: "Invalid Arguments" })
    }
}

module.exports = {
    getAll,
    getById,
    create,
    deleteById,
    update, 
}