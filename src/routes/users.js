const router = require('express').Router();

router.get('/users/signin',(req,res)=>{
    //res.send('Ingresando');
    res.render('users/signin')
})

router.get('/users/signup',(req,res)=>{
   // res.send('Form de autenticacion');
   res.render('users/signup')
})


module.exports=router