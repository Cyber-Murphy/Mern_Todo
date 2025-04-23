const Todotask = require("../models/dbtask");
// create task
const createTask = async (req, res) => {
  try {
    const { title, completed } = req.body;
    const task = new Todotask({
      title: title,
      completed: completed ?? false,
    });
    await task.save();
    console.log(task);
    res.send(task);
  } catch (error) {
    console.error(error);
  }
};
// now will delete the task by finding it's id
const deleteTask = async (req, res) => {
  const { id } = req.params;
  const deleteTask = await Todotask.findByIdAndDelete(id);
  if (!deleteTask) {
    return res.send("task not found gaurav");
  }
  res.send("Task deleted");
};

// find all the tasks
const findAllTask = async (req, res) => {
  const findit = await Todotask.find();
  res.send(findit);
};
// toggle the task to mark as completed or incomplete
const toggleTask = async (req, res) => {
  const { id } = req.params;
  const task = await Todotask.findById(id);
  if (!task) {
    return res.send(" task not found");
  }
  task.completed = !task.completed;
  console.log(`Toggling task: ${task.title}, New status: ${task.completed}`); // 👈 helpful log

  await task.save();
  res.send(task)
};

// edit the task

const editTask= async(req,res)=>{
    try {
        const {id}= req.params
        const {title,completed}=req.body
        const updatetask= await Todotask.findByIdAndUpdate(id,{
            title:title,
            completed:completed ?? false
        })
        await updatetask.save()
        res.send(updatetask)
    } catch (error) {
        console.error(error);
        
    }
}

module.exports = { createTask, toggleTask, findAllTask, deleteTask ,editTask};
