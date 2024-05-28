const { HttpError } = require("../../utils");
const { employeeService } = require("../../services");

const getEmployeeById = async (req, res) => {
  try {
    const { employeeId } = req.params;
    const result = await employeeService.getById(employeeId);
    if (!result) {
      throw HttpError(404, "Employee not found");
    }
    res.json({ status: "Success", code: 200, data: { employee: result } });
  } catch (error) {
    res.status(500).json({ status: "Error", code: 500, message: error.message });
  }
};

module.exports = getEmployeeById;