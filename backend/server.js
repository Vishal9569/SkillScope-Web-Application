require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const createAdminUser = require("./scripts/initAdmin");

const app = express();
const port = process.env.PORT || 5000;
const mongodbCloudKey = process.env.Mongodb_Cluster;

// Import Routes
const authRoutes = require("./routes/auth");
const pathRouter = require("./routes/pathRouter");
const userRouter = require("./routes/Dashboard");
const testSubmitRouter = require("./routes/testSubmission");

// Import Models and Data
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
const projectModel = require("./models/projectQues/projectModel");
const projectQues = require("./models/projectQues/projectQues");
const codingQues = require("./models/coding-ques/codingQues");
const codingModel = require("./models/coding-ques/model");

const allowedOrigins = [
    'https://skill-scope-web-application-rprm.vercel.app',
    'https://skill-scope-web-application.vercel.app'
];

app.use(cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));



// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/data", pathRouter);
app.use("/api/user", userRouter);
app.use("/api/test", testSubmitRouter);

app.get("/", (req, res) => {
    res.send("Server working well!");
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error("Server Error:", err.stack);
    res.status(500).send("Something broke!");
});

// MongoDB Connection
async function connectToDatabase() {
    try {
        await mongoose.connect(mongodbCloudKey, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected");
    } catch (err) {
        console.error("MongoDB connection failed:", err);
        process.exit(1);
    }
}

// Seed DB if Empty
const dataInsert = async (model, ques, label) => {
    try {
        const count = await model.countDocuments();
        if (count === 0) {
            await model.insertMany(ques);
            console.log(`Seeded: ${label}`);
        }
    } catch (err) {
        console.error(`Error initializing ${label}:`, err);
    }
};

async function seedDatabase() {
    await dataInsert(uniModel, htmlQues, "HTML");
    await dataInsert(uniModel, cssQues, "CSS");
    await dataInsert(uniModel, jsQues, "JavaScript");
    await dataInsert(uniModel, reactQues, "React");
    await dataInsert(uniModel, mysqlQues, "MySQL");
    await dataInsert(uniModel, mongodbQues, "MongoDB");
    await dataInsert(uniModel, resApiQues, "REST API");
    await dataInsert(uniModel, pythonQues, "Python");
    await dataInsert(uniModel, javaQues, "Java");
    await dataInsert(uniModel, springbootQues, "Spring Boot");
    await dataInsert(projectModel, projectQues, "Project Questions");
    await dataInsert(codingModel, codingQues, "Coding Questions");
}

(async () => {
    await connectToDatabase();
    await seedDatabase();
    createAdminUser();

    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
})();

