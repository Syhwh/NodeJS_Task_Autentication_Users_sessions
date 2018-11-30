const router = require('express').Router();
const Note = require('../models/Note');
router.get('/notes/add',(req,res)=>{
    res.render('notes/new-note'); 
});




router.post('/notes/new-note', async (req, res)=>{
    const {title , description} = req.body;
    const errors = [];
    if (!title){
        errors.push({text:'You must write a title'}); 
    }
    if(!description){
        errors.push({text:'You must write a description'}); 
    }
    if (errors.length>0){
        res.render('notes/new-note',{
            errors,
            title,
            description
        });
    }else{//create a new note
        const newNote=new Note({title, description});
        await newNote.save();
        //res.send('ok')
        res.redirect('/notes');
    }
});
//
router.get('/notes', async (req,res)=>{
   //res.send('notes from database');
   const notes =await Note.find().sort({date:'desc'});
   res.render('notes/all-notes',{notes})
});

router.get('/notes/edit/:id', async (req,res)=>{
   //consult the data base to find the note to edit
   const note= await Note.findById(req.params.id);
   res.render('notes/edit-note',{note})
});

router.put('/notes/edit-note/:id', async (req,res)=>{
    const {title, description}=req.body;
    await Note.findByIdAndUpdate(req.params.id, {title, description});
    res.redirect('/notes');
});

router.delete('/notes/delete/:id', async (req, res)=>{
   await Note.findByIdAndDelete(req.params.id);
   res.redirect('/notes');
   // res.send('ok')
});

module.exports=router