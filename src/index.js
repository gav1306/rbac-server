require("dotenv").config();
require("express-async-errors");
const express = require("express");
const mongoose = require("mongoose");
const errorMiddleware = require("./middleware/error");
const authRouter = require("./routes/auth");
const permissionRouter = require("./routes/permission");
const notFoundMiddleware = require("./middleware/not-found");
const app = express();
app.use(express.json());
app.use("/", authRouter);
app.use("/permission", permissionRouter);
app.use(notFoundMiddleware);
app.use(errorMiddleware);
mongoose.connect(process.env.MONGO_URI);
app.listen(8000);
