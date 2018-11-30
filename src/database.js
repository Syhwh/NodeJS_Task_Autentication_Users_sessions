const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/notes-db-app',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:false
})
// promise
    .then(db => console.log('Database is connected') )
    .catch(err => console.log('Database error',err)   )
