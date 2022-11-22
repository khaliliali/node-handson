const Task = require("./../models/task");

const getAllTasks = (req, res) => {
  res.send("All tasks");
};

const createTask = (req, res) => {
  //   res.send("Create a task");
  res.json(req.body);
};

const getTasks = (req, res) => {
  //   res.send("Get single task");
  res.json({ id: req.params.id });
};
const updateTasks = (req, res) => {
  res.send("Update tasks");
};
const deleteTasks = (req, res) => {
  res.send("Delete tasks");
};

module.exports = {
  getAllTasks,
  createTask,
  getTasks,
  updateTasks,
  deleteTasks,
};
