const mongoose = require('mongoose')


const taskSchema = new mongoose.Schema({

    fruit_name: {
        type: String,
        required: true
    },
    unit_price: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true,
    }

})

module.exports = mongoose.model('Task',taskSchema)