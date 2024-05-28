const { Employee } = require("../models");

class EmployeeService {
  async add(data) {
    const result = await Employee.create({ ...data });
    if (!result) {
      return null;
    }
    return result;
  }

  async delete(id) {
    const deletedEmployee = await Employee.findByIdAndRemove(id);
    if (!deletedEmployee) {
      return null;
    }
    return deletedEmployee;
  }

  async getAll() {
    const allEmployees = await Employee.find({}, "-createdAt -updatedAt");
    if (!allEmployees) {
      return null;
    }
    return allEmployees;
  }

  async getById(id) {
    const employee = await Employee.findOne({ _id: id }, "-createdAt -updatedAt");
    if (!employee) {
      return null;
    }
    return employee;
  }

  async update(id, data) {
    console.log('Updating employee with ID:', id, 'Data:', data);
    const result = await Employee.findByIdAndUpdate(id, { ...data }, { new: true, select: "-createdAt -updatedAt" });
    if (!result) {
      return null;
    }
    return result;
  }
}

module.exports = new EmployeeService();