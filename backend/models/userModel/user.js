const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
   },

   email: {
      type: String,
      unique: true,
      required: true,
   },

   password: {
      type: String,
      required: true,
   },


   // App system role (admin vs user)
   role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
   },

   lastLogin: {
      type: Date,
      default: null,
   },

   // Track test submissions
   testHistory: [
      {
         testId: { type: mongoose.Schema.Types.ObjectId, ref: "Test" },
         startedAt: Date,
         submittedAt: Date,
         score: Number,
         correctAnswers: Number,
         totalQuestions: Number,
         evaluationStatus: {
            type: String,
            enum: ["pending", "evaluated", "manual"],
            default: "pending",
         },
      },
   ],
});

module.exports = mongoose.model("user", userSchema);
