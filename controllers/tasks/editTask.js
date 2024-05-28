const { HttpError } = require("../../utils");
const { taskServices } = require("../../services");

const editTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    console.log(`Editing task with ID: ${taskId}, Data:`, req.body); // Логування для діагностики
    const result = await taskServices.update(taskId, req.body);
    if (!result) {
      throw HttpError(404, `Not found`);
    }
    res.json({ status: "success", code: 200, data: { task: result } });
  } catch (error) {
    console.error('Error in editTask controller:', error); // Логування помилки
    res.status(500).json({ message: error.message });
  }
};

module.exports = editTask;
