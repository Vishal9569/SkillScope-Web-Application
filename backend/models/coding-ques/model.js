
const { required } = require("joi");
const mongoose = require("mongoose");


const customTestSchema = new mongoose.Schema({
    input: {
        type: String,
        required: true
    },
    expectedOutput: {
        type: String,
        required: true
    }
});

const evaluationSchema = new mongoose.Schema({
    mustInclude: {
        type: String,
        required: true
    },
    customTests: {
        type: [customTestSchema],
        default: []
    }
});

const codingSchema = new mongoose.Schema({

    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    },
    roles: [String],
    type: {
        type: String,
        required: true
    },
    evaluation: {
        type: evaluationSchema,
        required: true
    }

})

const codingdb = mongoose.model("codingdb", codingSchema)
module.exports = codingdb;