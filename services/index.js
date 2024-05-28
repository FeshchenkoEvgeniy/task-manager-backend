const userService = require("./usersService");
const boardService = require("./boardService");
const columnService = require("./columnService");
const backgroundsService = require("./backgroundService");
const taskServices = require("./taskService");
const employeeService = require("./employeeService");

console.log("employeeService in services/index.js:", employeeService);

module.exports = {
  userService,
  boardService,
  columnService,
  backgroundsService,
  taskServices,
  employeeService
};
