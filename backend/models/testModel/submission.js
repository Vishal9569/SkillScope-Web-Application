// models/testModel/submission.js
const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
    testId: { type: mongoose.Schema.Types.ObjectId, ref: "Test" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    answers: [String], // Add structure for coding/project later
    score: Number,
    correctAnswers: Number,
    totalQuestions: Number,
    evaluationStatus: {
        type: String,
        enum: ["pending", "evaluated", "manual"],
        default: "pending",
    },
    submittedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Submission", submissionSchema);
