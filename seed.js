const mongoose = require('mongoose')
const Countries = require('./models/countries')
mongoose.connect('mongodb://localhost:27017/countrydb')
    .then(() => {
        console.log('countriesDB connection established')
    })
    .catch(err => {
        console.log('error while connecting to database')
        console.log(err)
    })

const dataToBeInserted = [
    {
        name: "India",
        capital: "New Delhi",
        population: 1.38,
        majorcities: ['Mumbai','Chennai','Banglore','Kolkatta','New Delhi']
    },
    {
        name: "USA",
        capital: "Washington DC",
        population: 0.33,
        majorcities: ['Newyork','Los Angeles','Huston','Pheonix','Chicago']
    },
    {
        name: "Japan",
        capital: "Tokyo",
        population: 0.12,
        majorcities: ['Tokyo','Sapporo','Yokohama','Nagoya','Kyoto']
    },
    {
        name: "Russia",
        capital: "Moscow",
        population: 0.14,
        majorcities: ['Moscow','Saint Petersburg','Novosibirsk','Yekaterinberg','Kazan']
    },
    {
        name: "Germany",
        capital: "Berlin",
        population: 0.083,
        majorcities: ['Berlin','Frankfurt','Munich','Cologne','Stuttgart']
    },
    {
        name: "Nigeria",
        capital: "Abuja",
        population: 0.20,
        majorcities: ['Lagos','Kano','Port Harcourt','Benin City','Ibadan']
    }];
Countries.insertMany(dataToBeInserted).then(res => {
    console.log('inserted sucessfully')
    console.log(res)
}).catch(err => {
    console.log('error')
    console.log(err)
})
