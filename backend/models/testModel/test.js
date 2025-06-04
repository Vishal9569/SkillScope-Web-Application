const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
    title: { type: String, required: true },
    type: { type: String, enum: ["mcq", "code", "project"], required: true },
    questions: [
        {
            question: String,
            options: [String], // For MCQ
            correctAnswer: String,
        },
    ],
    totalMarks: Number,
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Test", testSchema);
