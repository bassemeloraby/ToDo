const mongoose = require('mongoose');

const schema = new mongoose.Schema({ title: String });

module.exports = mongoose.model('Task', schema);