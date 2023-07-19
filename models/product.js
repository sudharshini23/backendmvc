// const products = [];

const fs = require('fs');

const path = require('path');

// create it global
const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json')

const getProductsFromFile = cb => {
    // const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json')
        fs.readFile(p, (err, fileContent) => {
            if(err) {
                // return [];
                return cb([]);
            }
            // return JSON.parse(fileContent);
            cb(JSON.parse(fileContent)) 
        })
}

module.exports = class Product {
    constructor(t) {
        this.title = t
    }
    save() {
        // products.push(this) // this refers to object created by class
        // const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json')
        getProductsFromFile(products => {
            products.push(this)
            fs.writeFile(p,JSON.stringify(products),err => {
                console.log(err);
            })
        });
        // fs.readFile(p, (err,fileContent) => {
            // let products = [];
            // products.push(this);
            // fs.writeFile(p, JSON.stringify(products), (err) => {
            //     console.log(err);
            // });
        // });
    }

    static fetchAll(cb) {
        // return products //  dont use this, since its static
        // const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json')
        // fs.readFile(p, (err, fileContent) => {
        //     if(err) {
        //         // return [];
        //         cb([]);
        //     }
        //     // return JSON.parse(fileContent);
        //     cb(JSON.parse(fileContent))
        // })
        getProductsFromFile(cb);
    }
}