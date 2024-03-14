const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const { DEV_URL } = process.env;

const { boardsRouter, columnsRouter, usersRouter, tasksRouter, backgroundsRouter } = require("./routers/api");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

const whitelist = ["https://feshchenkoevgeniy.github.io/", DEV_URL];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(logger(formatsLogger));
app.use(express.json());
app.use(cors());

app.use("/api/users", corsOptions, usersRouter);
app.use("/api/boards", corsOptions, boardsRouter);
app.use("/api/columns", corsOptions, columnsRouter);
app.use("/api/tasks", corsOptions, tasksRouter);
app.use("/api/backgrounds", corsOptions, backgroundsRouter);

app.use((req, res) => {
  res.status(404).json({ status: "failed", code: 404, data: { message: "Not found" } });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error", code } = err;
  res.status(status).json({ status: "failed", code, data: { message } });
});

module.exports = app;
