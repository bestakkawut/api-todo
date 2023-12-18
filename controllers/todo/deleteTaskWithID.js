const ErrorResponse = require('../../middleware/errorResponse');
const Task = require('../../models/Task');


const deleteTaskWithID = async (req, res, next) => {
	const { id } = req.params

	try {

		const taskItem = new Task().find(id);

		if (!taskItem || taskItem.length === 0) {
			throw new ErrorResponse("Task not found", 404);
		}

		// update taskItem
		const task = new Task().archive(id);

    req.response.result = true;
    req.response.data = task;
    req.response.message = "deleteTaskWithID";

    return res.status(200).json(req.response);
  } catch (error) {
    return next(error)
  }
};

module.exports = deleteTaskWithID 