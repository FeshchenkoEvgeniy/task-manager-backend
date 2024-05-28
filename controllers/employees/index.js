const { ctrlWrapper } = require("../../utils");
const addEmployee = require("./addEmployee");
const deleteEmployee = require("./deleteEmployee");
const editEmployee = require("./editEmployee");
const getEmployeeById = require("./getEmployeeById");
const getEmployees = require("./getEmployees");

module.exports = {
  addEmployee: ctrlWrapper(addEmployee),
  deleteEmployee: ctrlWrapper(deleteEmployee),
  editEmployee: ctrlWrapper(editEmployee),
  getEmployeeById: ctrlWrapper(getEmployeeById),
  getEmployees: ctrlWrapper(getEmployees),
};