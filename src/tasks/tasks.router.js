const router = 
require('express').Router()
const httpTasks = 
require('./tasks.http')

router.route('/tasks')
    .get(httpTasks.getAll)
    .post(httpTasks.create)

router.route('/tasks/:id')
    .get(httpTasks.getById)
    .put(httpTasks.update)
    .delete(httpTasks.deleteById)

module.exports = {
    router
}