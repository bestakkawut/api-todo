const ErrorResponse = require("../../../middleware/errorResponse");
const Task = require("../../../models/Task");

const retrieveTaskWithID = async (req, res, next) => {
  try {
    let { id } = req.params;

    const task = new Task().find(id);

    if (!task || task.length === 0) {
      throw new ErrorResponse("Task not found", 404);
    }

    req.response.result = true;
    req.response.data = task;
    req.response.message = "retrieveTasks";
    return res.status(200).json(req.response);
  } catch (error) {
    return next(error);
  }
};

module.exports = retrieveTaskWithID;
