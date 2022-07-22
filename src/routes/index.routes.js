import { Router } from 'express';
import Task from '../models/Task';

const router=Router();

router.get('/', (req, res) => {
    res.render('index')
});

router.post('/tasks/add', async (req, res) => {
    try {
        const task = Task(req.body)
    
        await task.save()

        res.redirect('/')
    }    
    catch (error){
        console.log(error)
    }

    
});


router.get('/about.hbs', (req, res) => {
    res.render('about')
});

router.get('/conductor.hbs', (req, res) => {
    res.render('conductor')
});

router.get('/pasajero.hbs', (req, res) => {
    res.render('pasajero')
});

router.get('/admin.hbs', async (req, res) => {
    const tasks = await Task.find().lean() 
    res.render('admin', { tasks: tasks})
});

router.get('/edit/:id', async (req, res) =>{
    try{
        const task = await Task.findById(req.params.id).lean()
        res.render('edit', {task});
    }
    catch(error){
        console.log(error.message);
    }
});

router.post('/edit/:id', async (req, res)=>{

    const {id} = req.params;

    await Task.findByIdAndUpdate(id, req.body);

    res.redirect("/admin.hbs");
});

router.get('/eliminar/:id', async (req, res) =>{
    const {id} = req.params;
    await Task.findByIdAndDelete(id);
    res.redirect("/admin.hbs");
});

export default router;