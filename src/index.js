require("dotenv").config();
require("express-async-errors");

const express = require("express");
const mongoose = require("mongoose");

const errorMiddleware = require("./middleware/error");
const notFoundMiddleware = require("./middleware/not-found");

const userRouter = require("./routes/user");
const permissionRouter = require("./routes/permission");
const roleRouter = require("./routes/role");

const app = express();

app.use(express.json());

app.use("/user", userRouter);
app.use("/permission", permissionRouter);
app.use("/role", roleRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.listen(process.env.PORT, async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`server has started on port ${process.env.PORT}`);
  } catch (error) {
    console.log(`server could not start with error: ${error.message}`);
  }
});
