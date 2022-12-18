import {Schema, model} from 'mongoose'

const pizzaSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    varients: [],
    prices: [],
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {timestamps: true})

export default model('Pizza', pizzaSchema)
