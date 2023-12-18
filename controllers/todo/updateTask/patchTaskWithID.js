const ErrorResponse = require('../../../middleware/errorResponse');
const Task = require('../../../models/Task');

const patchTaskWithID = async (req, res, next) => {

  try {

    const { id } = req.params

    const taskItem = new Task().find(id);

    if (!taskItem || taskItem.length === 0) {
      throw new ErrorResponse("Task not found", 404);
    }

    const updateData = req.body;

    const task = new Task().patch(id, updateData);

    req.response.result = true;
    req.response.data = task;
    req.response.message = "patchTaskWithID";

    return res.status(200).json(req.response);
  } catch (error) {
    return next(error)
  }
};

module.exports = patchTaskWithID 