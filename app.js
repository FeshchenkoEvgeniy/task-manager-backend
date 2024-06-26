const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const { boardsRouter, columnsRouter, usersRouter, tasksRouter, backgroundsRouter,employeesRouter  } = require("./routers/api");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(express.json());
app.use(cors());

app.use("/api/users", usersRouter);
app.use("/api/boards", boardsRouter);
app.use("/api/columns", columnsRouter);
app.use("/api/tasks",  tasksRouter);
app.use("/api/backgrounds",  backgroundsRouter);
app.use("/api/employees", employeesRouter);

app.use((req, res) => {
  res.status(404).json({ status: "failed", code: 404, data: { message: "Not found" } });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error", code } = err;
  res.status(status).json({ status: "failed", code, data: { message } });
});

module.exports = app;
