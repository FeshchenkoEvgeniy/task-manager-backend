const { HttpError } = require("../../utils");
const { employeeService } = require("../../services");

const deleteEmployee = async (req, res) => {
  try {
    const { employeeId } = req.params;
    console.log('Deleting employee with ID:', employeeId);
    const result = await employeeService.delete(employeeId);
    if (!result) {
      console.error('Employee not found for deletion:', employeeId);
      throw HttpError(404, `Not found`);
    }
    res.json({ status: "Success", code: 200, data: { deletedEmployee: result } });
  } catch (error) {
    console.error('Error in deleteEmployee controller:', error);
    res.status(500).json({ status: "Error", code: 500, message: error.message });
  }
};

module.exports = deleteEmployee;