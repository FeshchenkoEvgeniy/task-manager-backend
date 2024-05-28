const { employeeService } = require("../../services");
const { HttpError } = require("../../utils");

const addEmployee = async (req, res) => {
  try {
    const result = await employeeService.add(req.body);
    if (!result) {
      throw HttpError(400, "Error adding employee");
    }
    res.status(201).json({ status: "Success", code: 201, data: { employee: result } });
  } catch (error) {
    res.status(500).json({ status: "Error", code: 500, message: error.message });
  }
};

module.exports = addEmployee;