const router = require('express').Router();

router.get('/',(req,res) =>{
    //res.send('Index');
    res.render('index');
})

router.get('/about',(req,res) =>{
    //res.send('about ');
    res.render('about');
})

module.exports=router