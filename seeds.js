const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand   ')
    .then(() => {
        console.log('Mongo Connection Open');
    })
    .catch((err) => {
        console.log("Mongo Connection Failed");
        console.log(err);
    })

// const p = new Product({
//     name: 'Ruby Grapefruit',
//     price: 1.99,
//     category: 'fruit'
// })
// p.save()
//     .then(p => {
//         console.log(p)
//     })
//     .catch(e => {
//         console.log(e)
//     })

const seedProducts = [
    {
        name: 'Ruby Grapefruit',
        price: 1.99,
        category: 'fruit'
    },
    {
        name: 'Apple',
        price: 2.49,
        category: 'fruit'
    },
    {
        name: 'Banana',
        price: .99,
        category: 'fruit'
    },
    {
        name: 'Organic Onion',
        price: 1.99,
        category: 'vegetable'
    },
    {
        name: 'Chocolate Milk 2L',
        price: 4.99,
        category: 'dairy'
    },
    {
        name: 'Milk 2% 1L',
        price: 3.99,
        category: 'dairy'
    },
    {
        name: 'Skim Milk 2L',
        price: 5.49,
        category: 'dairy'
    },
    {
        name: 'Butter 500g',
        price: 1.99,
        category: 'dairy'
    },
    {
        name: 'Potato',
        price: 1.49,
        category: 'vegetable'
    },
    {
        name: 'Carrot',
        price: 2.99,
        category: 'vegetable'
    }



]

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    });