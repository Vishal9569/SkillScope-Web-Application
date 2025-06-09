const express = require("express");
const { verifyToken } = require("../middleware/authmiddleware");
const User = require("../models/userModel/user");
const TestSubmission = require("../models/testModel/submission");

const router = express.Router();

router.get("/dashboard", verifyToken, async (req, res) => {
    try {
        const user = await User.findById(req.user.userId);

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        //  Admin View
        if (user.role === "admin") {
            const users = await User.find().select("name email roles createdAt");
            const submissions = await TestSubmission.find();

            const visits = submissions.reduce((acc, curr) => {
                acc[curr.userId] = (acc[curr.userId] || 0) + 1;
                return acc;
            }, {});

            return res.json({
                role: "admin",
                totalUsers: users.length,
                recentUsers: users.slice(-5),
                totalSubmissions: submissions.length,
                testFrequencyByUser: visits,
            });
        }


        const submissions = await TestSubmission.find({ userId: user._id });

        const attempts = submissions.map(sub => ({
            testId: sub.testId,
            date: sub.date,
            score: sub.score,
            total: sub.total,
            correctAnswers: sub.correctAnswers,
            attempted: sub.attempted,
        }));

        return res.json({
            role: user.roles,
            name: user.name,
            email: user.email,
            attempts,
        });

    } catch (err) {
        console.error(" Dashboard Error:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
