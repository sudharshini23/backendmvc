// const products = [];

const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
}

exports.postAddProduct = (req, res, next) => {
    // products.push({ title: req.body.title });
    const product = new Product(req.body.title); // new product created based on class
    product.save();
    res.redirect('/');
}

exports.getProduct = (req, res, next) => {
    // const products = adminData.products;
    // const products = Product.fetchAll();
    Product.fetchAll(products => {
        res.render('shop', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
          });
    })
}