const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  id: Number,
  question: {
    type: String,
    required: true
  },
  options: {
    type: [String],
    required: true
  },
  type: {
    type: String,
    enum: ['html', 'css', 'javascript', 'reactjs', 'mongodb', 'restapi', 'springboot', 'python', 'mysql', 'java'],
    required: true
  },
  roles:[String],  
  answer: {
    type: mongoose.Schema.Types.Mixed,
    default: "Not available"
  }
});

module.exports = mongoose.model("Question", questionSchema);

const Quesdb = mongoose.model("Quesdb", questionSchema);
module.exports = Quesdb;