const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../utils");
const Joi = require("joi");

const employeeSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "Set first name for employee"],
  },
  lastName: {
    type: String,
    required: [true, "Set last name for employee"],
  },
  department: {
    type: String,
    required: [true, "Set department for employee"],
  },
  specialty: {
    type: String,
    required: [true, "Set specialty for employee"],
  },
}, { versionKey: false, timestamps: true });

employeeSchema.post("save", handleMongooseError);

const Employee = model("employee", employeeSchema);

const addEmployeeSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  department: Joi.string().required(),
  specialty: Joi.string().required(),
});

const editEmployeeSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  department: Joi.string().required(),
  specialty: Joi.string().required(),
}).unknown(true);;

const employeeSchemas = { addEmployeeSchema, editEmployeeSchema };

module.exports = { Employee, employeeSchemas };