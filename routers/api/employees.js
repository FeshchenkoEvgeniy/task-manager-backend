const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/employees");
const { employeeSchemas } = require("../../models");
const { validateBody } = require("../../utils");

const { authenticate, isValidId, isReqObject } = require("../../middlewares");

router.get("/", authenticate, ctrl.getEmployees);

router.get("/:employeeId", authenticate, isValidId("employeeId"), ctrl.getEmployeeById);

router.post(
  "/",
  authenticate,
  isReqObject,
  validateBody(employeeSchemas.addEmployeeSchema),
  ctrl.addEmployee,
);

router.delete("/:employeeId", authenticate, isValidId("employeeId"), ctrl.deleteEmployee);

router.put(
  "/:employeeId",
  authenticate,
  isValidId("employeeId"),
  isReqObject,
  validateBody(employeeSchemas.editEmployeeSchema),
  ctrl.editEmployee,
);

module.exports = router;