const path = require('path');

const rootDir = require('../util/path')

exports.contactget = (req,res,next) => {
    res.sendFile(path.join(rootDir, 'views', 'contactus.html'));
}

exports.contactpost = (req,res,next) => {
    res.redirect('/success');
}