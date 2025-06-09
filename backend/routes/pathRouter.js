const express = require("express");
const uniModel = require("../models/universalModel/uniModel");
const codingQues = require("../models/coding-ques/model");
const projectModel = require("../models/projectQues/projectModel");
const router = express.Router();



router.get("/all-question", async (req, res) => {
  const { type } = req.query;

  try {
    let query = {};
    if (type) {
      query.type = type;  
    }

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
    const filter = category
      ? { roles: category.toLowerCase() } // optional: normalize case
      : {};

    const data = await codingQues.find(filter);

    if (data.length === 0) {
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
    const filter = category
      ? { roles: category.toLowerCase() } // ensures it matches case-insensitively
      : {};

    const data = await projectModel.find(filter);

    if (data.length === 0) {
      return res.status(404).json({ message: `No project questions found for ${category}` });
    }

    res.status(200).json(data);

  } catch (error) {
    console.error("Error occurred while fetching project questions:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


router.get("/:type", async (req, res) => {
  const { type } = req.params;
  try {
    const questions = await uniModel.find({ type });
    if (questions.length === 0) {
      return res.status(404).json({ message: `No questions found for type: ${type}` });
    }
    res.status(200).json(questions);

  }
  catch (err) {
    console.log("error while fetch specific dataset !", err);
  }
})






module.exports = router;
