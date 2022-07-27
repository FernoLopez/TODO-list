const taskDB = [{
    id: 1,
    task: "Training",
    description: "1 hour of exercise",
    hour: "6 a.m.",
    priority: "high",
    state:"started"
}]

const getAllTasks = () => {
    return taskDB
}

const getTaskById = (id) => {
    const filteredDB = taskDB.filter((task) => task.id === id)
    return filteredDB[0]
}

const createTask = (taskObj) => {
    if (taskDB.length === 0) {
      const newTask = {
        id: 1,
        name: taskObj.task,
        age: taskObj.description,
        email: taskObj.hour,
        country: taskObj.priority,
        phone: taskObj.state,
      }
      taskDB.push(newTask)
      return newTask
    }
    const newTask = {
      id: taskDB[taskDB.length - 1].id + 1,
      name: taskObj.task,
      age: taskObj.description,
      email: taskObj.hour,
      country: taskObj.priority,
      phone: taskObj.state,
    }
    taskDB.push(newTask)
    return newTask
  }

   const deleteTask = (id) => {
  const index = taskDB.findIndex((item) => item.id === id);
  if (index !== -1){
    taskDB.splice(index, 1)
    return true
  }
  return false
}

const updateTask = (id, data) => {
  const index = taskDB.findIndex((item) => item.id === id);
  if (index !== -1){
    taskDB[index] = data
    return taskDB[index]
  } else {
    createTask(data)
    return taskDB.at(-1)
  }
}

module.exports = {
    getAllTasks,
    getTaskById, 
    createTask,
    deleteTask,
    updateTask
}
    