//Importando o Model
const Task = require('../models/task');

exports.addNewTask = async (req, res) => {
    try{
        const task = await new Task(req.body).save();
        res.status(201).json({ error: false, task })
    } catch (err) {
        res.status(400).json({ error: true, message: err.message})
    }
}

exports.getTasksByUserId = async (req, res) => {
    try{
        const tasks = await Task.find({
            userId: req.params.id
        })

        res.status(200).json(tasks)
    } catch (err) {
        res.status(400).json({ error: true, message: err.message})
    }
}

exports.getTaskById = async (req, res) => {
    try{
        const task = await Task.findById(req.params.id)
        res.status(200).json(task)
    } catch (err) {
        res.status(400).json({ error: true, message: err.message})
    }
}

exports.updateTaskById = async (req, res) => {
    
    try{        
        const task = await Task.find({
            id: req.params.id
        })

        if (task.length === 0) {
            res.status(404).json({ error: false, message: 'Task not found. Check the task id.'})            
        }else{            
            await Task.findByIdAndUpdate(req.params.id, req.body)
            res.status(200).json({ error: false, message: 'Operation carried out successfully'})
        }        
    } catch (err) {
        res.status(400).json({ error: true, message: err.message})
    }
}

 exports.deleteTaskById = async (req, res) => { 
    await Task.findByIdAndDelete(req.params.id).then(()=>{
        res.status(200).json({ error: false, message: 'Operation carried out successfully'})
    }).catch((err)=>{
        res.status(400).json({ error: true, message: err})
    })
}