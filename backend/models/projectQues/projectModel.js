const mongoose = require("mongoose");

const Projectmodel = new mongoose.Schema({
    id: Number,
    title: {
        type: String,
        required: true
    },
    description: String,
    question: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['project-question'],
        required: true
    },
    roles: [String],
    answer: {
        type: mongoose.Schema.Types.Mixed,
        default: "Not available"
    }
});


const projectdb = mongoose.model("projectdb", Projectmodel);
module.exports = projectdb;