const { employeeService } = require("../../services");
const { HttpError } = require("../../utils");

const getEmployees = async (req, res) => {
  const result = await employeeService.getAll();
  if (!result) {
    throw HttpError(404, "Unable to fetch employees");
  }
  res.json({
    status: "Success",
    code: 200,
    data: { employees: result },
  });
};

module.exports = getEmployees;