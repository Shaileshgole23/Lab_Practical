const express = require('express');
const mongoose = require('mongoose');
const Book = require('./model/book');
const ejs  = require('ejs');
const app = express();

app.use(express.urlencoded({extended:true}));

mongoose.connect('mongodb://localhost:27017/Lab_data')
    .then(()=>console.log("DB connected"))
    .catch(()=>console.log("DB not connected"))

app.get('/books',async(req,res)=>{
    const books = await Book.find()
    res.render('bookpage',{books})
})

app.get('/books/new',(req,res)=>{
    res.render('New')
})

app.post('/book',(req,res)=>{
    const {Title,Author,genre}=req.body
    
    
})

app.get('/book/:id',(req,res)=>{

})
    
app.listen(4000,()=>{
    console.log("server running port 4000")
})
