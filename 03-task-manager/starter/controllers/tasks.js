const Task = require("../models/Task");
console.log("Task model is:", Task);
const asyncWrapper = require('../middleware/async')
// Wraper allow us not use to much code in controllers - middleware function

const getAllTasks = asyncWrapper( async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });  
    // .json({ status:"success", data:{tasks, nbHits:tasks.length} });
    // res.status(200).json({ tasks, amoun: tasks.length });
});

const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } 
);

const getTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      const error = new Error('Not found');
      error.status = 404;
      return next(error)
      return res.status(404).json({ msg: `No task with id : ${taskID}` });
    }
    res.status(200).json({ task });  
});

const deleteTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `No task with id : ${taskID}` });
    }
    res.status(200).json({ task }); // Wich task we remove
    // res.status(200).send()
    // res.status(200).json({ task: null, status: "success" });
});

const updateTask = asyncWrapper(async (req, res) => { // Put replacing existing resourse, Patch - partial update
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true, // Options
      runValidators: true, // Here is updating
    });
    if (!task) {
      return res.status(404).json({ msg: `No task with id : ${taskID}` });
    }
    res.status(200).json({ task });
});

// const editTask = async (req, res) => { // Put replacing existing resourse, Patch - partial update
//   try {
//     const { id: taskID } = req.params;

//     const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
//       new: true, // Options
//       runValidators: true, // Here is updating
//       overwrite:true,

//     });

//     if (!task) {
//       return res.status(404).json({ msg: `No task with id : ${taskID}` });
//     }

//     res.status(200).json({ task });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  // editTask,
};
