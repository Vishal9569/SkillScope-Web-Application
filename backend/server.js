require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;
const mongodbCloudKey = process.env.Mongodb_Cluster;

// Models and Data
const uniModel = require("./models/universalModel/uniModel");
const htmlQues = require("./models/universalModel/htmlQues");
const cssQues = require("./models/universalModel/cssQues");
const jsQues = require("./models/universalModel/QuesJavascript");
const reactQues = require("./models/universalModel/reactQues");
const resApiQues = require("./models/universalModel/resApidbQues");
const mongodbQues = require("./models/universalModel/mongoQues");
const mysqlQues = require("./models/universalModel/mysqlQues");
const pythonQues = require("./models/universalModel/pythonQues");
const javaQues = require("./models/universalModel/javaQuesdb");
const springbootQues = require("./models/universalModel/springbootQues");
const ProjectSchema = require("./models/projectQues/projectModel");
const projectQues = require("./models/projectQues/projectQues");
const codingQues = require("./models/coding-ques/codingQues");
const codingquesModel = require("./models/coding-ques/model");

// Routes
const authRoutes = require("./routes/auth");
const pathRouter = require("./routes/pathRouter");
const userRouter = require("./routes/Dashboard");
const testSubmitRouter = require("./routes/testSubmission");
const createAdminUser = require("./scripts/initAdmin");

// CORS config
const allowedOrigins = ['https://skill-scope-web-application-rprm.vercel.app'];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.options("*", cors()); // handle preflight

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/data", pathRouter);
app.use("/api/user", userRouter);
app.use("/api/user-test", testSubmitRouter);

// Global error handler
app.use((err, req, res, next) => {
    console.error("Server Error:", err.stack);
    res.status(500).send("Something broke!");
});

// MongoDB connection
async function main() {
    try {
        await mongoose.connect(mongodbCloudKey);
        console.log("MongoDB connected");
    } catch (err) {
        console.error("MongoDB connection failed:", err);
        process.exit(1);
    }
}
main();

// Seed DB if empty
const dataInsert = async (model, ques, label) => {
    try {
        const count = await model.countDocuments();
        if (count === 0) {
            await model.insertMany(ques);
            
        }
    } catch (err) {
        console.error(`Error initializing ${label}:`, err);
    }
};

dataInsert(uniModel, htmlQues, "HTML");
dataInsert(uniModel, cssQues, "CSS");
dataInsert(uniModel, jsQues, "JavaScript");
dataInsert(uniModel, reactQues, "React");
dataInsert(uniModel, mysqlQues, "MySQL");
dataInsert(uniModel, mongodbQues, "MongoDB");
dataInsert(uniModel, resApiQues, "REST API");
dataInsert(uniModel, pythonQues, "Python");
dataInsert(uniModel, javaQues, "Java");
dataInsert(uniModel, springbootQues, "Spring Boot");
dataInsert(ProjectSchema, projectQues, "Project Questions");
dataInsert(codingquesModel, codingQues, "Coding Questions");


app.get("/", (req, res) => {
    res.send("Server working well!");
});

 
createAdminUser();

 
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
