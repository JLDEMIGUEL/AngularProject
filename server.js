var express = require('express');

var app = express();

app.use(express.static(__dirname+'/dist/angular-project'));

app.get('/*',(req,res)=>{
    res.sendFile(__dirname+'/dist/angular-project/index.html')
})

app.listen(process.env.PORT || 4200);