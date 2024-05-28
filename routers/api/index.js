const boardsRouter = require("./boards");
const columnsRouter = require("./columns");
const tasksRouter = require("./tasks");
const usersRouter = require("./auth");
const backgroundsRouter = require("./backgrounds");
const employeesRouter = require("./employees");


module.exports = {
  boardsRouter,
  columnsRouter,
  usersRouter,
  tasksRouter,
  backgroundsRouter,
  employeesRouter,
};