const { HttpError } = require("../../utils");
const { taskServices } = require("../../services");

const addTask = async (req, res) => {
  const { _id: owner } = req.user;
  const { title, deadline, column } = req.body;
  if (!title || !deadline || !column) {
    throw HttpError(400, "provide all required fields");
  }
  const result = await taskServices.add({ ...req.body, owner });
  res.status(201).json({ status: "Success", code: 201, data: { taks: result } });
};

module.exports = addTask;
