const express = require('express')
const app = express()
const path = require('path')
const port = 3000
const mongoose = require('mongoose');
const Countries = require('./models/countries')
mongoose.connect('mongodb://localhost:27017/countrydb')
.then(()=>{
    console.log('database connection established' )
})
.catch(err => {
    console.log('error while connecting to database')
    console.log(err)
})

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.redirect('https://www.youtube.com/playlist?list=PLY-ecO2csVHdLhAO6TERaMJXP8aqyWVt-')
})
app.get('/countries',async (req,res)=>{
    const countries = await Countries.find({})
    res.render('countries',{countries})
    console.log(countries)
})
app.get('/countries/:id',async (req,res)=>{
    const {id} = req.params
    console.log(`id is ${id}`)
    const country = await Countries.findById(id)
    console.log(country)
    res.render('country-details',{country})
})
app.listen(port,()=>{
    console.log(`listening to port ${port}`)
})              