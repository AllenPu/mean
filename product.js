// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;
// Schema
var productSchema = new mongoose.Schema({
title: String,
instock: Boolean,
price: Number,
photo: String,
});
// Return model
module.exports = restful.model('Products', productSchema);