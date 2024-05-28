const { HttpError } = require("../../utils");
const { employeeService } = require("../../services");

const editEmployee = async (req, res) => {
  try {
    const { employeeId } = req.params;
    console.log('Received update request for employee with ID:', employeeId);
    console.log('Request body:', req.body);

    const result = await employeeService.update(employeeId, req.body);
    if (!result) {
      console.error('Employee not found for editing:', employeeId);
      throw HttpError(404, "Employee not found");
    }
    res.json({ status: "Success", code: 200, data: { employee: result } });
  } catch (error) {
    console.error('Error in editEmployee controller:', error);
    res.status(400).json({ status: "Error", code: 400, message: error.message });
  }
};

module.exports = editEmployee;