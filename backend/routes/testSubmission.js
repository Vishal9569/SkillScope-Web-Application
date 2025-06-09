const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/authmiddleware");
const JudgeAPI = require("../utils/judgeAPI");
const User = require("../models/userModel/user");
const Test = require("../models/testModel/test");
const Submission = require("../models/testModel/submission");

router.post("/submit", verifyToken, async (req, res) => {
    try {
        const { testId, answers = [], code = "", language = "" } = req.body;
        const user = await User.findById(req.user.userId);
        const test = await Test.findById(testId);

        if (!test || !user) {
            return res.status(404).json({ error: "Test or User not found" });
        }

        let correctAnswers = 0;
        const totalQuestions = test.questions.length;
        let score = 0;
        let evaluationStatus = "pending";

        if (test.type === "mcq") {
            test.questions.forEach((q, i) => {
                if (q.correctAnswer && q.correctAnswer === answers[i]) {
                    correctAnswers++;
                }
            });
            score = Math.round((correctAnswers / totalQuestions) * 100);
            evaluationStatus = "evaluated";
        } else if (test.type === "code" || test.type === "project") {
            const result = await JudgeAPI(code, language);  
            score = result.success ? 100 : 0;
            evaluationStatus = result.success ? "evaluated" : "manual";
        }

        const now = new Date();

        
        const submission = new Submission({
            testId,
            userId: user._id,
            answers,
            score,
            correctAnswers,
            totalQuestions,
            evaluationStatus,
            submittedAt: now,
        });

        await submission.save();

        
        user.testHistory.push({
            testId,
            startedAt: now,  
            submittedAt: now,
            score,
            correctAnswers,
            totalQuestions,
            evaluationStatus,
        });

        await user.save();

        return res.status(200).json({ message: "Test submitted successfully", score });
    } catch (err) {
        console.error("Test submission error:", err);
        return res.status(500).json({ error: "Internal error" });
    }
});

module.exports = router;
