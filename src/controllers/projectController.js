//Importando o Model
const Project = require('../models/project');

exports.createProject = async (req, res) => {
    try{
        const project = await new Project(req.body).save();
        res.status(201).json({ error: false, project })
    } catch (err) {
        res.status(400).json({ error: true, message: err.message})
    }
}

exports.getProjectsByUserId = async (req, res) => {
    try{
        const projects = await Project.find({
            userId: req.params.id
        })
        res.status(200).json(projects)
    } catch (err) {
        res.status(400).json({ error: true, message: err.message})
    }
}

exports.updateProjectById = async (req, res) => {
    try{       
        await Project.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({ error: false, message: 'Operation carried out successfully'})              
    } catch (err) {
        res.status(400).json({ error: true, message: err.message})
    }
}

exports.deleteProjectById = async (req, res) => { 
    await Project.findByIdAndDelete(req.params.id).then(()=>{
        res.status(200).json({ error: false, message: 'Operation carried out successfully'})
    }).catch((err)=>{
        res.status(400).json({ error: true, message: err})
    })
}