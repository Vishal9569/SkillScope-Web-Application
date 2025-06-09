const express = require("express");
const uniModel = require("../models/universalModel/uniModel");
const codingQues = require("../models/coding-ques/model");
const projectModel = require("../models/projectQues/projectModel");
const router = express.Router();

const allowedTypes = ['hr', 'behavioral', 'mcq', 'news', 'technical'];

router.get("/all-question", async (req, res) => {
  const { type } = req.query;

  try {
    const query = type ? { type } : {};
    const dataset = await uniModel.find(query);
    res.status(200).json(dataset);
  } catch (err) {
    console.error("Error while fetching dataset!", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/coding-question", async (req, res) => {
  const { category } = req.query;

  try {
    const filter = category ? { roles: category.toLowerCase() } : {};
    const data = await codingQues.find(filter);

    if (!data.length) {
      return res.status(404).json({ message: `No questions found for ${category}` });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error("Error occurred while fetching coding questions", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/project-question", async (req, res) => {
  const { category } = req.query;

  try {
    const filter = category ? { roles: category.toLowerCase() } : {};
    const data = await projectModel.find(filter);

    if (!data.length) {
      return res.status(404).json({ message: `No project questions found for ${category}` });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error("Error occurred while fetching project questions:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

<<<<<<< HEAD
router.get("/:type", async (req, res) => {
  const { type } = req.params;

  if (!allowedTypes.includes(type.toLowerCase())) {
    return res.status(400).json({ error: `Invalid type: ${type}` });
  }

=======

router.get("/type/:type", async (req, res) => {
  const { type } = req.params;

>>>>>>> b076a53b7c995b9f29a2bb39b8a57eb19b0434f8
  try {
    const questions = await uniModel.find({ type });
    if (!questions.length) {
      return res.status(404).json({ message: `No questions found for type: ${type}` });
    }
    res.status(200).json(questions);
  } catch (err) {
<<<<<<< HEAD
    console.log("Error while fetching specific dataset:", err);
=======
    console.error("Error while fetching specific dataset!", err);
>>>>>>> b076a53b7c995b9f29a2bb39b8a57eb19b0434f8
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
