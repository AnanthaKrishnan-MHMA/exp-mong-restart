const express = require('express')
const methodOverride = require('method-override')
const app = express()
const path = require('path')
const port = 3000
const mongoose = require('mongoose');
const Countries = require('./models/countries');
const { urlencoded } = require('express');
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
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

app.get('/',(req,res)=>{
    res.redirect('/countries')
})
app.get('/countries',async (req,res)=>{
    const countries = await Countries.find({})
    res.render('countries',{countries})
    console.log(countries)
})
app.get('/countries/new',(req,res)=>{
    res.render('new-country')
})
app.post('/countries',async(req,res)=>{
    console.log(req.body)
    const newCountry = new Countries(req.body)
    await newCountry.save();
    res.redirect(`/countries/${newCountry.id}`)
})
app.get('/countries/:id',async (req,res)=>{
    const {id} = req.params
    console.log(`id is ${id}`)
    const country = await Countries.findById(id)
    console.log(country)
    res.render('country-details',{country})
})
app.get('/countries/:id/edit',async (req,res)=>{
    const {id} = req.params
    const country = await Countries.findById(id)
    res.render('country-edit',{country})
})
app.put('/countries/:id',async (req,res)=>{
    const {id} = req.params
    console.log(req.body)
    const foundCountry = await Countries.findByIdAndUpdate(id,req.body,{runValidators: true})
    res.redirect(`/countries/${id}`)
})
app.get('/countries/:id/delete',async (req,res)=>{
    const {id} = req.params
    const country = await Countries.findById(id)
    res.render('country-delete',{country})
})
app.delete('/countries/:id',async (req,res)=>{
    const {id} = req.params
    console.log(req.body)
    const foundCountry = await Countries.findByIdAndDelete(id,req.body)
    res.redirect(`/countries`)
})
app.listen(port,()=>{
    console.log(`listening to port ${port}`)
})              