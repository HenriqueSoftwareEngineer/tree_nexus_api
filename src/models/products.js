const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    // Adicione outros campos conforme necessário
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product; // Exportando o modelo