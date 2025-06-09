require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const auth = require("./middleware/authmiddleware")
const cors = require("cors");
const authRoutes = require("./routes/auth");
const port = process.env.PORT;
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
const pathRouter = require("./routes/pathRouter");
const userRouter = require("./routes/Dashboard");
const testSubmitRouter = require("./routes/testSubmission");
const createAdminUser = require("./scripts/initAdmin");


const mongodbCloudKey = process.env.Mongodb_Cluster;

const allowedOrigins = ['https://skill-scope-web-application-rprm.vercel.app'];

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps, curl, Postman)
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));

//  Preflight requests (important)
app.options('*', cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/auth", authRoutes);
app.use("/api/data", pathRouter)
app.use("/api/user", userRouter);
app.use("/api/user", testSubmitRouter);
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});


async function main() {

    await mongoose.connect(`${mongodbCloudKey}`);

}

main();

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

dataInsert(uniModel, htmlQues, "htmlQuesdb");
dataInsert(uniModel, cssQues, "cssQuesdb");
dataInsert(uniModel, jsQues, "jsQuesdb");
dataInsert(uniModel, reactQues, "reactQuesdb");
dataInsert(uniModel, mysqlQues, "mysqlQuesdb");
dataInsert(uniModel, mongodbQues, "mongosdbQues");
dataInsert(uniModel, resApiQues, "restApiQuesdb");
dataInsert(uniModel, pythonQues, "pythonQuesdb");
dataInsert(uniModel, javaQues, "javaQuesdb");
dataInsert(uniModel, springbootQues, "springbootQuesdb");
dataInsert(ProjectSchema, projectQues, "projectQues")
dataInsert(codingquesModel, codingQues, "codingQues");

app.get("/", (req, res) => {
    res.send("server working well !");
})

createAdminUser();
app.listen(port);



