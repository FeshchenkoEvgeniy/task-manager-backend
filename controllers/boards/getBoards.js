const { boardService } = require("../../services");
const { HttpError } = require("../../utils");

const getBoards = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await boardService.getAll(owner);
  if (!result) {
    throw HttpError(400);
  }
  res.json({
    status: "success",
    code: 200,
    data: { boards: result },
  });
};

module.exports = getBoards;
