const Task = require('../models/task');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks: tasks });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const getTasks = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const taskById = await Task.findOne({ _id: taskID });

    if (!taskById) {
      return res.status(404).json({ msg: `This task is not exist: ${taskID}` });
    }

    res.status(200).json({ taskById });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const updateTasks = (req, res) => {
  res.send('Update tasks');
};

const deleteTasks = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const taskById = await Task.findOneAndDelete({ _id: taskID });

    if (!taskById) {
      return res
        .status(404)
        .json({ msg: `This task is already deleted : ${taskID}` });
    }

    res.status(200).json({ taskById });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTasks,
  updateTasks,
  deleteTasks,
};
